import PropTypes from "prop-types";

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default function Pagination({ page, prevStep, nextStep }) {
  return (
    <div className="flex justify-center w-full">
      <button
        onClick={prevStep}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Prev
      </button>
      <span className="text-2xl px-32">{page}</span>
      <button
        onClick={nextStep}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
}
