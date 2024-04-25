const skills = [
  { name: "C++", description: "/" },
  { name: "Python", description: "/skills" },
  { name: "Typescript", description: "/experience" },
];

export default function Skills() {
  return (
    <div className="mx-auto p-10 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-3 place-items-center gap-4">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
