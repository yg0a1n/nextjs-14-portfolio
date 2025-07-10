const StartSteps = ({ number, text }: { number: string; text: string }) => (
  <div className="flex flex-row justify-center items-center">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[var(--secondary)]">
      <p className="font-bold text-[20px]">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-md leading-[32.4px] text-justify">
      {text}
    </p>
  </div>
)

export default StartSteps
