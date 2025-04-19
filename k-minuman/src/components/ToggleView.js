import React, { useContext } from 'react';
import { MinumanContext } from '../context/MinumanContext';

const ToggleView = () => {
  const { viewMode, setViewMode } = useContext(MinumanContext);

  return (
    <div className="btn-group">
      <button
        className={`btn btn-outline-primary ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => setViewMode('grid')}
      >
        Grid
      </button>
      <button
        className={`btn btn-outline-primary ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => setViewMode('list')}
      >
        List
      </button>
    </div>
  );
};

export default ToggleView;
