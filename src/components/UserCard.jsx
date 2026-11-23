export default function Usercard({name, email, phone}) {
    return (
        <div className="bg-white rounded-lg shadow p-4" >
            <h2 className="text-xl font-bold text-gray-800" >{name}</h2>
            <p className="text-gray-600">📧 {email}</p>
            <p className="text-gray-600">📞 {phone}</p>
        </div>
    );
}