import { fetchFilterData, fetchCharacterById } from "../../../services/API";

describe("API Test", () => {
    it("should be return related data after filtered api request", async() => {
        const status = "dead";
        const species = "human";
        const gender = "male";
        const filteredData = await fetchFilterData(status, species, gender);
        expect(filteredData.data.results[0].name).toBe("Adjudicator Rick");
        expect(filteredData.data.results[0].status).toBe("Dead");
        expect(filteredData.data.results[0].gender).toBe("Male");
        expect(filteredData.data.results[0].species).toBe("Human");
    });

    it("should be return related character data when request by character id", async() => {
        const characterId = "1";
        const characterData = await fetchCharacterById(characterId);
        expect(characterData.data?.id).toBe(1);
        expect(characterData.data?.species).toBe("Human");
        expect(characterData.data?.name).toBe("Rick Sanchez");
    });
});

 