import SavingIcon from '/src/assets/icono_ahorro.svg';
import HouseIcon from '/src/assets/icono_casa.svg';
import FoodIcon from '/src/assets/icono_comida.svg';
import VariousIcon from '/src/assets/icono_gastos.svg';
import LeisureIcon from '/src/assets/icono_ocio.svg';
import HealthIcon from '/src/assets/icono_salud.svg';
import SubsIcon from '/src/assets/icono_suscripciones.svg';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import './expense.css';

export const Expense = ({expense, setExpenseEdit, handleDelete}) => {

    const {name, category, quantity, date} = expense;

    const iconsRelations = {
        saving: SavingIcon,
        food: FoodIcon,
        house: HouseIcon,
        various: VariousIcon,
        leisure: LeisureIcon,
        health: HealthIcon,
        subscriptions: SubsIcon
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => handleDelete(expense)}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
                <div className="expense">
                <div className="expense__content">
                        <img
                        className='expense__icon'
                        src={iconsRelations[category]}
                        alt="Category icon"/>
                        <div className="expense__description">
                            <p className="expense__cat">
                                {category.toUpperCase()}
                            </p>
                            <p className="expense__name">
                                {name}
                            </p>
                            <p>
                                Added on: <span>{'' + date}</span>
                            </p>
                        </div>
                </div>
                <div className="expense__quantity">
                    <p>${quantity}</p>
                </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}