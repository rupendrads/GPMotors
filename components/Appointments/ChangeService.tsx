import { inputLabelStyle, changeBoxStyle, changeButtonStyle } from "./styles";

const ChangeService = ({
  stepIndex,
  changeStepIndex,
  serviceType,
}: {
  stepIndex: number;
  changeStepIndex: (index: number) => void;
  serviceType: string | undefined;
}) => {
  return (
    <div className={changeBoxStyle}>
      <div>
        <label className={inputLabelStyle}>{serviceType}</label>
      </div>
      <div>
        <button
          className={changeButtonStyle}
          onClick={() => changeStepIndex(stepIndex)}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangeService;
