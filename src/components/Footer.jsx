export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#040810] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p className="mb-1">塔里木大学 · 机械电气工程学院</p>
        <p>新疆阿拉尔 · 843300</p>
        <p className="mt-4 text-gray-600">
          &copy; {new Date().getFullYear()} 6MD-200Y 真空脉动节能干燥设备. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
