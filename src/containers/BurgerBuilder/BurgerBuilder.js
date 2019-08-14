import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        orderNowDisabled: true,
        purchasing: false,
        loading: false
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice,
            orderNowDisabled: false
        });
    };

    removeIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        if (this.state.ingredients[type] <= 0) return;
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const updatedOrderNowDisabled =
            Object.keys(updatedIngredients)
                .map(igKey => updatedIngredients[igKey])
                .reduce((sum, el) => sum + el, 0)
            <= 0;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice,
            orderNowDisabled: updatedOrderNowDisabled
        });
    };

    orderNowClickedHandler = () => {
        this.setState({ purchasing: true });
    };

    orderCanceledHandler = () => {
        this.setState({ purchasing: false });
    };

    orderContinueHandler = () => {
        // alert('You continue');
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Roger',
                address: {
                    street: '124325 st',
                    zipCode: '11222',
                    country: 'US'
                },
                email: 'test@fdasf.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response =>
                // close modal and spinner
                this.setState({ loading: false, purchasing: false })
            ).catch(error =>
                this.setState({ loading: false, purchasing: false })
            );
    };

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };
        // { salad: true, meat: false...}
        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancel={this.orderCanceledHandler}
            continue={this.orderContinueHandler} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} backdropClicked={this.orderCanceledHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    orderNowDisabled={this.state.orderNowDisabled}
                    orderNowClicked={this.orderNowClickedHandler}
                />
            </React.Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);
