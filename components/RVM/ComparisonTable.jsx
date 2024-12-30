import React from "react";

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto bg-gray-100 p-6 mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
        Specification Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="border border-gray-300 px-4 py-2 text-green-800 font-semibold">
                SPECS
              </th>
              <th className="border border-gray-300 px-4 py-2 text-green-800 font-semibold">
                megaVend OVM400
              </th>
              <th className="border border-gray-300 px-4 py-2 text-green-800 font-semibold">
                Reatmos RVM Prime
              </th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            <tr>
              <td className="border border-gray-300 px-4 py-2">Dimensions</td>
              <td className="border border-gray-300 px-4 py-2">
                1900 (h) x 1270 (w) x 1020mm(d) (Customizable)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                1800 (h) x 1050 (w) x 950mm(d) (Customizable)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Advertisement</td>
              <td className="border border-gray-300 px-4 py-2">
                55 inch Ad Screen & Translucent Panels at Sides
              </td>
              <td className="border border-gray-300 px-4 py-2">
                43 inch (Customizable up to 49”)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">User Display</td>
              <td className="border border-gray-300 px-4 py-2">17 inch Touch Screen</td>
              <td className="border border-gray-300 px-4 py-2">7 inch Touch Screen</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Capacity</td>
              <td className="border border-gray-300 px-4 py-2">
                1 ltr Bottles = 3500 or cans = 2500
              </td>
              <td className="border border-gray-300 px-4 py-2">1 Ltr Bottles = 2500</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Material Types</td>
              <td className="border border-gray-300 px-4 py-2">
                Pet Bottles & Aluminum Cans
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Pet Bottles & Aluminum Cans
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Body Structure</td>
              <td className="border border-gray-300 px-4 py-2">MS Powder Coated</td>
              <td className="border border-gray-300 px-4 py-2">MS Powder Coated</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Reward System</td>
              <td className="border border-gray-300 px-4 py-2">
                Paper Coupon and Smartphone App
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Paper Coupon, Sms Coupon, Smartphone App
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Container Id</td>
              <td className="border border-gray-300 px-4 py-2">
                Object, Metal & Weight Detection
              </td>
              <td className="border border-gray-300 px-4 py-2">Object Detection</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Container Size</td>
              <td className="border border-gray-300 px-4 py-2">3 Liters (max)</td>
              <td className="border border-gray-300 px-4 py-2">N/A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Printer</td>
              <td className="border border-gray-300 px-4 py-2">Present</td>
              <td className="border border-gray-300 px-4 py-2">Present</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Price</td>
              <td className="border border-gray-300 px-4 py-2">9 L (estimated)</td>
              <td className="border border-gray-300 px-4 py-2">N/A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Other Features</td>
              <td className="border border-gray-300 px-4 py-2">
                Water Resistance Body, CCTV Camera (Optional), QR Code Scanner
              </td>
              <td className="border border-gray-300 px-4 py-2">N/A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Crushing Capacity
              </td>
              <td className="border border-gray-300 px-4 py-2">
                70% Reduction in Volume/900 Bottles Per Hour
              </td>
              <td className="border border-gray-300 px-4 py-2">
                300 Bottles Per Hour
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Power Supply</td>
              <td className="border border-gray-300 px-4 py-2">230V/440V</td>
              <td className="border border-gray-300 px-4 py-2">230V/440V</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};