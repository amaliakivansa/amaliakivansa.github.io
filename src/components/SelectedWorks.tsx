import React from "react";

const SelectedWorks = () => {
  const works = [
    {
      title: "Easy Survey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aperiam illo non ducimus hic mollitia debitis, labore alias obcaecati, nulla tempore, quia quae asperiores officiis placeat error culpa ad consequatur!",
      link: "https://easysurvey.id/",
    },
    {
      title: "Home Page Pandooin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aperiam illo non ducimus hic mollitia debitis, labore alias obcaecati, nulla tempore, quia quae asperiores officiis placeat error culpa ad consequatur!",
      link: "https://zamrood-by-pandooin.netlify.app/",
    },
  ];
  return (
    <div id="exploration" className="lg:mt-48 mt-20">
      <h1 className="text-4xl font-semibold text-center">Selected Works</h1>
      {works.map((work, index) => (
        <>
          <div className="container-shadow [ w-full lg:w-4/5 mx-auto mt-8 p-1 ] [ rounded-3xl border border-gray ] [ flex lg:flex-row flex-col justify-between gap-8 ]">
            <div className="basis-[40%] [ pl-4 py-4 ] [ flex flex-col justify-between lg:-order-1 order-last ] h-auto">
              <div>
                <h3 className="font-bold text-xl">{work.title}</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  aperiam illo non ducimus hic mollitia debitis, labore alias
                  obcaecati, nulla tempore, quia quae asperiores officiis
                  placeat error culpa ad consequatur!
                </p> */}
              </div>
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="border border-gray rounded-full py-2 px-4 flex justify-between items-center"
              >
                <p>View Site</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className="basis-[60%]">
              <img src={`/assets/images/works/work-${index + 1}.png`} alt="works pict" className="rounded-3xl" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SelectedWorks;
