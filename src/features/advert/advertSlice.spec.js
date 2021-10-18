import advertReducer,{ fetchAdsAsync,selectAdverts, } from "./advertSlice";

describe('Advert reducer', () => {
    const initState = {
        data: [],
        status: 'idle'
    };

    test('should handle fetch ads from api', async () =>{

        // Not complete
        const actual = advertReducer(initState, fetchAdsAsync());
        expect(actual.data).toEqual([]);
        
    });
  
  });