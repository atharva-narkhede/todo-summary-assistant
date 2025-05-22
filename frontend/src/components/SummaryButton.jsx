// src/components/SummaryButton.jsx
import React, { useState } from 'react';
import API from '../api';

function SummaryButton() {
  const [status, setStatus] = useState('');

  const handleSummarize = async () => {
    try {
      setStatus('Generating summary...');
      const res = await API.post('/summarize');
      setStatus(`✅${res.data.summary}`);
    } catch (err) {
      setStatus('❌ Failed to generate or send summary');
    }
  };

  return (
    <div className="text-center my-4">
      <button className="btn btn-warning" onClick={handleSummarize}>
        ✨ Summarize
      </button>
      {status && <div className="alert alert-info mt-3">{status}</div>}
    </div>
  );
}

export default SummaryButton;
