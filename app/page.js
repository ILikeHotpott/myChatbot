/*
 * @Author: Yitong Liu liuyitong1210@163.com
 * @Date: 2024-07-22 21:03:09
 * @LastEditors: Yitong Liu liuyitong1210@163.com
 * @LastEditTime: 2024-07-22 21:19:49
 * @FilePath: /nextbot/app/page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div>
      <Chatbot />
    </div>
  );
}
