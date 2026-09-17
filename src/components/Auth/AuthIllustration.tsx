const AuthIllustration = () => {
  return (
      <div className="flex flex-col items-center">
          <img
              src="/images/illustration.png"
              alt="Two students studying"
              className="w-[498px] hidden xl:block"
          />

          <div className="hidden md:flex md:items-center md:gap-2 md:mt-24 xl:mt-0 text-base">
              <span>Word</span>
              <span>·</span>
              <span>Translation</span>
              <span>·</span>
              <span>Grammar</span>
              <span>·</span>
              <span>Progress</span>
          </div>
      </div>
  );
};

export default AuthIllustration;