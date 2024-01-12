import DoctorsList from "./DoctorsList";

function DoctorsSmall() {
  return (
    <div className="my-10 w-full flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-4xl my-5 text-black dark:text-white font-bold tracking-wider">
          We Are Here <span className="text-primary">For You</span>
        </h1>
        <p className="text-sm max-w-[700px] text-balance mx-auto text-text_gray my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          quibusdam similique cumque deleniti dolorem, id minima neque amet.
          Repellendus officiis nam molestias quae nostrum dolorum ratione nisi
          cupiditate perferendis quidem.
        </p>
      </div>
      <DoctorsList />
    </div>
  );
}

export default DoctorsSmall;
