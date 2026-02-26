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
          className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
          style={pos}
        />
      ))}
    </>
  );
}
