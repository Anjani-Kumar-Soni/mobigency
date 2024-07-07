export async function POST(req, res) {
    try {
        const { heading, description, email } = await req.json();
        console.log(heading, description, email);
        Response.json({ message: "Hello" });
    } catch (e) {
        console.error(e);
    }
}