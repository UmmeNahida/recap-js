{/* Analytics Table */}
        // <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        //   <div className="p-6 border-b border-gray-100">
        //     <div className="flex items-center gap-2">
        //       <BarChart3 className="w-5 h-5 text-gray-600" />
        //       <h2 className="text-lg font-semibold text-gray-900">
        //         Analytics Overview
        //       </h2>
        //     </div>
        //   </div>
        //   <div className="overflow-x-auto">
        //     <table className="w-full">
        //       <thead className="bg-gray-50 border-b border-gray-100">
        //         <tr>
        //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //             Date
        //           </th>
        //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //             Views
        //           </th>
        //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //             Clicks
        //           </th>
        //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //             Conversions
        //           </th>
        //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        //             Rate
        //           </th>
        //         </tr>
        //       </thead>
        //       <tbody className="divide-y divide-gray-100">
        //         {data.analytics.map((item, index) => (
        //           <tr
        //             key={index}
        //             className="hover:bg-gray-50 transition-colors"
        //           >
        //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        //               {new Date(item.date).toLocaleDateString()}
        //             </td>
        //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        //               {item.views.toLocaleString()}
        //             </td>
        //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        //               {item.clicks.toLocaleString()}
        //             </td>
        //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        //               {item.conversions}
        //             </td>
        //             <td className="px-6 py-4 whitespace-nowrap text-sm">
        //               <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
        //                 {(
        //                   (item.conversions / item.clicks) *
        //                   100
        //                 ).toFixed(1)}
        //                 %
        //               </span>
        //             </td>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </div>
        // </div>

if("false"){
  console.log("yes")
}else{
  console.log("no")
}

console.log(typeof NaN)

const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 1 }
];

function getTotalProduct(cart) {
  const result = {};

  for (let product of cart) {
      result[product.id]
  }
}

const output = getTotalProduct(cart)
// console.log(output)

const product = {
  id:1,
  name: "mobile",
  price: 5000
}

console.log(product[1])  // object[keyProperty]





