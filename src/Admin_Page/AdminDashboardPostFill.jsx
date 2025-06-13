export default function AdminDashboardPostFill({cancelPost}) {
    return (
        <>
        <div>
            <button onClick={cancelPost}>Handle</button>
            <div className="w-full h-full">
                <div className="">
                    <input type='text' />
                </div>
            </div>
        </div>
        </>
    )
}