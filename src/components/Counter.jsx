import { useState } from "react";

const Counter = () => {
  const [checkedData, setCheckedData] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleSelectCheckbox = (e) => {
    const { name, checked } = e.target;
    setCheckedData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const selectAllCheckBtn = () => {
    setCheckedData({
      check1: true,
      check2: true,
      check3: true,
      check4: true,
    });
  };

  const allSelected = Object.values(checkedData).every(Boolean);

  const selectedCheckBoxes = Object.keys(checkedData).filter(
    (key) => checkedData[key]
  );

  const refreshSelectedBtn = () => {
    setCheckedData({
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    });
  };

  return (
    <div className="counter-container">
      <div className="counter-box">
        <label htmlFor="check1">Checkbox1</label>
        <input
          type="checkbox"
          name="check1"
          checked={checkedData.check1}
          onChange={handleSelectCheckbox}
        />
      </div>
      <div className="counter-box">
        <label htmlFor="check2">Checkbox2</label>
        <input
          type="checkbox"
          name="check2"
          checked={checkedData.check2}
          onChange={handleSelectCheckbox}
        />
      </div>
      <div className="counter-box">
        <label htmlFor="check3">Checkbox3</label>
        <input
          type="checkbox"
          name="check3"
          checked={checkedData.check3}
          onChange={handleSelectCheckbox}
        />
      </div>
      <div className="counter-box">
        <label htmlFor="check4">Checkbox4</label>
        <input
          type="checkbox"
          name="check4"
          checked={checkedData.check4}
          onChange={handleSelectCheckbox}
        />
      </div>
      <div className="select-btn">
        {!allSelected ? (
          <button onClick={selectAllCheckBtn}>Select All</button>
        ) : (
          <button disabled>Disabled</button>
        )}
        <div className="refresh-btn">
          <button onClick={refreshSelectedBtn}>Refresh</button>
        </div>
      </div>

      <div className="selected-checkbox">
        <p> checkboxes count: {selectedCheckBoxes.length} </p>
        <p> checkboxes: {selectedCheckBoxes.join(", ")} </p>
      </div>
    </div>
  );
};

export default Counter;
