import React, { useEffect } from 'react'

export default function HtmlData() {
   const  html = "\r\n<table>\r\n    <tbody>\r\n        <tr>\r\n            <td>Res. length</td>\r\n            <td>&#10005; 1</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Price</td>\r\n            <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">3,400.00</span></td>\r\n        </tr>\r\n                                    <tr>\r\n                <td>Refundable Security deposit</td>\r\n                <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">1,000.00</span></td>\r\n            </tr>\r\n                                                    <tr>\r\n                    <td>Cleaning Service</td>\r\n                    <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">500.00</span></td>\r\n                </tr>\r\n                            <tr>\r\n                    <td>Hot Tub</td>\r\n                    <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">75.00</span></td>\r\n                </tr>\r\n                            <tr>\r\n                    <td>Swimming Pool</td>\r\n                    <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">200.00</span></td>\r\n                </tr>\r\n                                                        <tr>\r\n                    <td>Corporate Event</td>\r\n                    <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">1,000.00</span></td>\r\n                </tr>\r\n                            <tr>\r\n                    <td>Prom </td>\r\n                    <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">3,000.00</span></td>\r\n                </tr>\r\n                                                <tr>\r\n                <td>Process full payment</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n        \r\n\r\n        <tr>\r\n            <td>PA Hotel Occupancy Tax</td>\r\n            <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">490.50</span></td>\r\n        </tr>\r\n        <tr>\r\n            <td>Monroe County PA Hotel Tax</td>\r\n            <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">245.25</span></td>\r\n        </tr>\r\n        \r\n        <tr>\r\n            <td>Processing Fee</td>\r\n            <td><span class=\"rz--currency\">$</span><span class=\"rz--amount\">0.00</span></td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td><strong>Total</strong></td>\r\n            <td><strong><span class=\"rz--currency\">$</span><span class=\"rz--amount\">9,910.75</span></strong></td>\r\n        </tr>\r\n<!--\r\n        <tr>\r\n            <td><strong>Due now</strong></td>\r\n            <td><strong><span class=\"rz--currency\">$</span><span class=\"rz--amount\">9,175.00</span></strong></td>\r\n        </tr> -->\r\n        <!--<tr>-->\r\n        <!--    <td> <small>* <b> 15 </b> Max Free Guests </small></td>-->\r\n        <!--    <td></td>-->\r\n        <!--</tr>-->\r\n    </tbody>\r\n</table>\r\n"
   let html3 = html.replaceAll("rz--currency", "text-green-600 ml-[50px]")
   let html4 = html3.replaceAll("rz--amount", "text-red-500 pl-1")
   let html6 = html4.replaceAll("<td>", `<td class="text-blue-400">`)
   const divRef = React.createRef()
   useEffect(() => {
    divRef.current.innerHTML = html6
   })

  return (
    <div className="">
        htmlData
        <div className='text-gray-600 flex flex-row justify-center' ref={divRef}></div>
    </div>
  )
}
