export default function SelectedBorderIndicators() {
  const positions = [
    { top: -8, left: -8 },
    { top: -8, right: -8 },
    { bottom: -8, left: -8 },
    { bottom: -8, right: -8 },
  ];

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-[15px] h-[15px] bg-background-light dark:bg-background-dark border-2 border-highlight-blue"
          style={pos}
        />
      ))}
    </>
  );
}