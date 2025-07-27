export default function ServerDataLayout({children ,} : {
    children: React.ReactNode;
}) {


return <div>
    {" "}
    <h1 className="text-red-500 mt-5 ml-5">This is Server Data Layout</h1>
    {children}
</div>

}