import { inputLabelStyle, changeBoxStyle, changeButtonStyle } from "./styles";

const ChangeService = ({
  stepIndex,
  changeStepIndex,
  serviceType,
  isEdit,
}: {
  stepIndex: number;
  changeStepIndex: (index: number) => void;
  serviceType: string | undefined;
  isEdit: boolean;
}) => {
  return (
    <div className={changeBoxStyle}>
      <div>
        <label className={inputLabelStyle}>{serviceType}</label>
      </div>
      <div>
        {isEdit === false && (
          <button
            className={changeButtonStyle}
            onClick={() => changeStepIndex(stepIndex)}
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
};

export default ChangeService;
