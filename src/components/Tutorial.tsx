import React, { useState, useEffect } from "react";

function Tutorial({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Navbar Tutorial!</h2>
        <p className="mb-4">Here's how you can navigate through the site...</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
}
