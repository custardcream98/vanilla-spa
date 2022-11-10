const COIN_OPEN_API = "https://api.coinpaprika.com/v1";

/**
 * 한가지 코인에 대해 디테일한 데이터를 가져옵니다.
 */
export async function getCoinData(coinId) {
  try {
    const res = await fetch(`${COIN_OPEN_API}/tickers/${coinId}`);
    const coins = await res.json();

    return coins;
  } catch (e) {}
}

/**
 * 전체 코인에 대해 정보를 가져옵니다.
 */
export async function getCoinListData() {
  try {
    const res = await fetch(`${COIN_OPEN_API}/coins`);
    const coins = await res.json();

    return coins;
  } catch (e) {}
}
