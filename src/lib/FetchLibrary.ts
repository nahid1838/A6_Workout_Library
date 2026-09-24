export const getLibraryes = async() => {
    try {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Error fetching libraryes data", error);
        return[];
    }
}