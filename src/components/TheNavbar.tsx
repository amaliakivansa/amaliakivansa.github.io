import React from 'react';

const TheNavbar = () => {
  const links = ['Story', 'Works', 'Exploration', 'Contact'];
  return (
    <div className='p-4 fixed w-full'>
      <div className='[ w-full lg:w-4/5 h-14 ] [ mx-auto p-4 ] [ flex items-center justify-between ] bg-white/75 left-1/2 right-1/2 [ rounded-3xl border border-gray ]'>
        <img src='/assets/images/logo.png' alt='logo' width={50} height={50} />
        <nav className=''>
          <ul className='flex items-center text-dark-gray font-medium'>
            {links.map((link) => (
              <a href={`#${link.toLowerCase()}`} key={link}>
                <li className='mx-2 hidden lg:block'>
                  {link}
                </li>
              </a>
            ))}
            <li className='lg:mx-2 bg-black px-4 py-2 text-white rounded-3xl btn-shadow hover:shadow-none cursor-pointer'>
              Say Hello!
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TheNavbar;
