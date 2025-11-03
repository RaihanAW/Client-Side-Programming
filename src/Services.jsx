/*
export const users = [
    {
        name: "Raihan" ,
        email: "Raihan123@gmail.com",
        street: "Jl. Nakula 1",
        city: "Semarang",
        age: 21,
        job: "Developer"
    },

    {
        name: "Ryota",
        email: "Ryota456@gmail.com",
        street: "Jl. Sadewa 2",
        city: "Jakarta"
    },

    {
        name: "Benaya",
        email: "Benaya789@gmail.com",
        street: "Jl. Puntadewa 3",
        city: "Surabaya"
    },
  ]

export const newUsers = [
    {
        name: "Julius" ,
        email: "Julius123@gmail.com",
        street: "Jl. Werkudara 1",
        city: "Tangerang",
        age: 21,
        job: "AI Developer"
    },

    {
        name: "Geraldo",
        email: "Geraldo456@gmail.com",
        street: "Jl. Arjuna 2",
        city: "Pontianak"
    },

    {
        name: "Alfandhy",
        email: "Alfandhy789@gmail.com",
        street: "Jl. Semar 3",
        city: "Bali"
    },
  ]

*/

const city = "Los Angeles";
const street = "Beverly Hills st.";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
        name: user.name,
        email: user.email,
        city,
        street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
    
  }
}