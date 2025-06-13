import { cn } from "../resources/utils";

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[13rem] grid-cols-5 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ title, value, description, className, ...props }) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      className,
    )}
    {...props}
  >
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
      <h3 className="mb-4 text-[2rem] leading-tight font-semibold text-[#0f4592]">
        {title}
      </h3>
      <h3 className="text-[4rem] font-semibold text-[#0f4592] md:text-[5rem]">
        {value}
      </h3>
      <p className="max-w-lg text-[1.25rem] text-neutral-500">{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
