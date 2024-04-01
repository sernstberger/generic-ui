export interface LogoProps {
  // children: React.ReactNode;
}

export const Logo = ({}: LogoProps) => {
  return (
    <>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-3"
        alt="GenericUI Logo"
      />
      <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        GenericUI
      </span>
    </>
  );
};
