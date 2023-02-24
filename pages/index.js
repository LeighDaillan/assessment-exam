import Head from "next/head";
import Card from "@/components/Card";
import { useState } from "react";

export default function Home(props) {
  const allManager = props.allManager;
  const belowTwenty = allManager.filter((data) => data.age <= 20);
  const twentoToTirtyNine = allManager.filter(
    (data) => data.age >= 21 && data.age <= 39
  );
  const aboveForty = allManager.filter((data) => data.age >= 40);

  const [managerData, setManagerData] = useState(allManager);
  const [date, setDate] = useState("");

  const filterManager = function (e) {
    const filter = e.target.value;
    if (filter === "belowTwenty") {
      setManagerData(belowTwenty);
    } else if (filter === "twentoToTirtyNine") {
      setManagerData(twentoToTirtyNine);
    } else if (filter === "aboveForty") {
      setManagerData(aboveForty);
    } else if (filter === "allManager") {
      setManagerData(allManager);
    } else {
      return;
    }
  };

  const countMe = function () {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
        console.log("Foo");
      } else if (i % 5 === 0) {
        console.log("Bar");
      } else {
        console.log(i);
      }
    }
  };
  // countMe();

  const convertDate = function () {
    const [year, month, day] = date.split("-");
    alert(`${year}-${month}-${day}`);
    // alert(date);
  };

  return (
    <>
      <Head>
        <title>Assessment Exam</title>
        <meta name="description" content="Growth Ops Assessment Exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="bg-red-50">
          <h1 className="text-center text-stone-700 py-5 md:py-10 text-xl md:text-4xl">
            DISTRICT MANAGER
          </h1>
        </div>
        <section className="mx-10 lg:max-w-6xl lg:mx-auto my-12">
          {/* Filter */}
          <div>
            <span className="text-lg block">Filter By Age</span>
            <select
              defaultValue="All"
              name="status"
              className="border p-2 w-52 sm:w-96 my-2"
              onChange={filterManager}
            >
              <option value="allManager">All</option>
              <option value="belowTwenty">20 and bellow</option>
              <option value="twentoToTirtyNine">21 to 39</option>
              <option value="aboveForty">40 and above</option>
            </select>
          </div>

          {/* Display Manager */}
          <div className="border-t-2 border-b-2 py-10 my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Card */}
            {managerData
              .sort((a, b) => a.age - b.age)
              .map((data) => (
                <Card key={data.id} manager={data} />
              ))}
          </div>

          {/* Date Conversion */}
          <div>
            <h3 className="">Date</h3>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="border p-2 w-52 sm:w-96 my-2"
            />
            <button
              onClick={convertDate}
              className="mx-5 bg-rose-700 text-white text-base px-9 py-2"
            >
              CONVERT
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://www.mocky.io/v2/5d73bf3d3300003733081869");
  const allManager = await res.json();

  return {
    props: {
      allManager,
    },
  };
}
