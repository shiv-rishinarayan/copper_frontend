import { useRouter } from "next/router";

const DataBreadcrumb = ({ link, title }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="bg-white shadow-sm px-6 md:px-20 py-5 fixed top-0 left-0 w-full z-50">
        <ul className="flex gap-x-1 md:gap-x-2 text-[12px] md:text-sm text-black/70 lato tracking-[0.3px]">
          <button
            onClick={handleBack}
            className="hover:text-accent font-medium transition-all duration-200 cursor-pointer"
          >
            Data
          </button>
          <span> &gt; </span>
          <a
            className="hover:text-accent font-medium transition-all duration-200"
            href={link}
          >
            {title}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default DataBreadcrumb;
