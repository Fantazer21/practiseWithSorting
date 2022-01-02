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
  dataFiltered: [
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
  setFilter: {
    quantityFeedBacks: 1,
    quantityStars: [],
    minPrice: 5000,
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
  SET_START_FEEDBACKS = 'set-start-feedbacks',
  SET_BOOKING_STATUS = 'set-book-status'
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
        ...state, setFilter: {
          ...state.setFilter,
          quantityFeedBacks: 1,
          quantityStars: [],
          minPrice: 10000,
          maxPrice: 90000,
        }
      }
    case Data.SET_START_FEEDBACKS:
      return {
        ...state, dataFiltered: [
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
        ]
      }
    case Data.SET_BOOKING_STATUS:
      return {
        ...state,
        dataFiltered: state.dataFiltered.map(el => {
          return (el.id === action.id) ? {...el, status: !action.status} : el
        })
      }

    default:
      return state
  }
}

//actions
export const setQuantityStarsAC = (star: []) => ({type: Data.SET_QUANTITY_STARS, feedbackStar: star} as const)
type setQuantityStarsACType = ReturnType<typeof setQuantityStarsAC>

export const setQuantityFeedbacksAC = (feedback: number) => ({
  type: Data.SET_QUANTITY_FEEDBACKS,
  quantityFeedBacks: feedback
} as const)
type setQuantityFeedbacksACType = ReturnType<typeof setQuantityFeedbacksAC>

export const setMinPriceAC = (price: number) => ({type: Data.SET_MIN_PRICE, price: price} as const)
type setMinPriceACType = ReturnType<typeof setMinPriceAC>

export const setMaxPriceAC = (price: number) => ({type: Data.SET_MAX_PRICE, price: price} as const)
type setMaxPriceACType = ReturnType<typeof setMaxPriceAC>


export const setFilteredDataAC = (data: FeedbackType[]) => ({type: Data.SET_FILTERED_DATA, dataArray: data} as const)
type setFilteredFeedBacksACType = ReturnType<typeof setFilteredDataAC>

export const setStartFilteredValuesAC = () => ({type: Data.SET_START_FILTERED_VALUES} as const)
type setStartFilteredValuesACType = ReturnType<typeof setStartFilteredValuesAC>

export const setStartFeedbacksAC = () => ({type: Data.SET_START_FEEDBACKS} as const)
type setStartFeedbacksACType = ReturnType<typeof setStartFeedbacksAC>

export const setBookStatusAC = (id: number, status: boolean) => ({
  type: Data.SET_BOOKING_STATUS,
  id: id,
  status: status
} as const)
type setBookStatusACType = ReturnType<typeof setBookStatusAC>


type ActionsType = setQuantityStarsACType
  | setQuantityFeedbacksACType
  | setMinPriceACType
  | setMaxPriceACType
  | setFilteredFeedBacksACType
  | setStartFilteredValuesACType
  | setStartFeedbacksACType
  | setBookStatusACType


