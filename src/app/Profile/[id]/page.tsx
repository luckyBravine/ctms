export default function UserProfile({params}: any){
    return(
        <main className="h-screen bg-white">
            <h1>Set Your Profile</h1>
            <h2>{params.id}</h2>
        </main>
    )
}