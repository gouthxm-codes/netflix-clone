import { CheckIcon } from "@heroicons/react/outline";
import { Product } from "@stripe/firestore-stripe-payments";
import React from "react";
interface IProps {
  products: Product[];
  selected: Product | null;
}
const Table = ({ products, selected }: IProps) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableTitle">Monthly price</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selected?.id === product.id ? "text-[#e50914]" : "text-[gray]"
              }`}
              key={product.id}
            >
              ₹{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableTitle">Video Quality</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selected?.id === product.id ? "text-[#e50914]" : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selected?.id === product.id ? "text-[#E50914]" : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selected?.id === product.id ? "text-[#E50914]" : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.portability === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
