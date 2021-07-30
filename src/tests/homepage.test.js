import {fetchData} from "../services/api";

it("test", async() => {
    const status = "dead";
    const species = "human";
    const gender = "male";
    const data = await fetchData(status, species, gender);
    expect(data.data.results[0].name).toBe("Adjudicator Rick");
    expect(data.data.results[0].gender).toBe("Male");
})



