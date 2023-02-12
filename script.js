async function fetchData() {
    const res=await fetch (""); // replace with endpoint
    const record=await res.json();
}
fetchData();