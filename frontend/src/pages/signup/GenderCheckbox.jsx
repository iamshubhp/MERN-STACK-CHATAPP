const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-zinc-100">Male</span>
          <input
            type="checkbox"
            className="checkbox ☐ text-zinc-100 border-zinc-400"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-zinc-100">Female</span>
          <input
            type="checkbox"
            className="checkbox ☐ text-zinc-100 border-zinc-400"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
