export type InitialStateType = {
  dataFeedback: FeedbackType[]
  dataStars: number[]
  currentQuantityStars: number
  quantityFeedBacks: number
  price: number,
  dataFiltered: FeedbackType[]
  setFilter: setFiltersType
}
export type setFiltersType = {
  quantityStars: number[],
  quantityFeedBacks: number,
  minPrice: number,
  maxPrice: number,
}

export type FeedbackType = {
  id: number,
  hotelName: string,
  feedbackStar: number,
  quantityFeedBacks: number,
  price: number
  status: boolean,
  description: string
}

const initialState: InitialStateType = {
  dataFeedback: [
    {
      id: 1,
      hotelName: 'Marina In',
      feedbackStar: 3,
      quantityFeedBacks: 45,
      price: 44500,
      status: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      hotelName: 'Blue bay',
      feedbackStar: 5,
      quantityFeedBacks: 12,
      price: 23450,
      status: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 3,
      hotelName: 'Green marine',
      feedbackStar: 4,
      quantityFeedBacks: 32,
      price: 73900,
      status: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 4,
      hotelName: 'Spa resort',
      feedbackStar: 1,
      quantityFeedBacks: 99,
      price: 93200,
      status: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 5,
      hotelName: 'Marina In',
      feedbackStar: 3,
      quantityFeedBacks: 45,
      price: 12000,
      status: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 6,
      hotelName: 'Bla BLa Hotel',
      feedbackStar: 2,
      quantityFeedBacks: 45,
      price: 20000,
      status: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 7,
      hotelName: 'Bla Ne wdsBLa Hotel',
      feedbackStar: 2,
      quantityFeedBacks: 25,
      price: 25000,
      status: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }
  ],
  dataStars: [1, 2, 3, 4, 5],
  currentQuantityStars: 2,
  quantityFeedBacks: 24,
  price: 43,
  dataFiltered: [],
  setFilter: {
    quantityStars: [],
    quantityFeedBacks: 12,
    minPrice: 10000,
    maxPrice: 90000,
  }
}

enum Data {
  SET_QUANTITY_STARS = 'set-quantity-stars',
  SET_QUANTITY_FEEDBACKS = 'set-quantity-feedbacks',
  SET_MIN_PRICE = 'set-min-price',
  SET_MAX_PRICE = 'set-max-price',
  SET_FILTERED_DATA = 'set-filtered-data',
  SET_START_FILTERED_VALUES = 'set-start-filtered-values',
}


export const dataReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case Data.SET_QUANTITY_STARS:
      return {
        ...state,
        setFilter: {
          ...state.setFilter,
          quantityStars: action.feedbackStar
        } as setFiltersType
      }
    case Data.SET_QUANTITY_FEEDBACKS:
      return {
        ...state,
        setFilter: {
          ...state.setFilter,
          quantityFeedBacks: action.quantityFeedBacks
        } as setFiltersType
      }
    case Data.SET_MIN_PRICE:
      return {
        ...state,
        setFilter: {
          ...state.setFilter,
          minPrice: action.price
        } as setFiltersType
      }
    case Data.SET_MAX_PRICE:
      return {
        ...state,
        setFilter: {
          ...state.setFilter,
          maxPrice: action.price
        } as setFiltersType
      }
    case Data.SET_FILTERED_DATA:
      return {
        ...state,
        dataFiltered: action.dataArray
      }
    case Data.SET_START_FILTERED_VALUES:
      return {
        ...state, setFilter: action.val
      }
    default:
      return state
  }
}

//actions
export const setQuantityStarsAC = (star: []) => ({type: 'set-quantity-stars', feedbackStar: star} as const)
type setQuantityStarsACType = ReturnType<typeof setQuantityStarsAC>

export const setQuantityFeedbacksAC = (feedback: number) => ({
  type: 'set-quantity-feedbacks',
  quantityFeedBacks: feedback
} as const)
type setQuantityFeedbacksACType = ReturnType<typeof setQuantityFeedbacksAC>

export const setMinPriceAC = (price: number) => ({type: 'set-min-price', price: price} as const)
type setMinPriceACType = ReturnType<typeof setMinPriceAC>

export const setMaxPriceAC = (price: number) => ({type: 'set-max-price', price: price} as const)
type setMaxPriceACType = ReturnType<typeof setMaxPriceAC>


export const setFilteredFeedBacks = (data: FeedbackType[]) => ({type: 'set-filtered-data', dataArray: data} as const)
type setFilteredFeedBacksACType = ReturnType<typeof setFilteredFeedBacks>

export const setStartFilteredValues = (val: setFiltersType) => ({type: 'set-start-filtered-values', val: val} as const)
type setStartFilteredValuesACType = ReturnType<typeof setStartFilteredValues>


type ActionsType = setQuantityStarsACType
  | setQuantityFeedbacksACType
  | setMinPriceACType
  | setMaxPriceACType
  | setFilteredFeedBacksACType
  | setStartFilteredValuesACType


