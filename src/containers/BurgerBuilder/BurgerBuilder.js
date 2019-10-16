import React, { Component } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('ingredients.json')
        //     .then(res => {
        //         this.setState({ ingredients: res.data });
        //     }).catch(err => {
        //         this.setState({ error: true });
        //     });
    }


    updatedOrderNowDisabled = (ingredients) =>
        Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0)
        <= 0;

    orderNowClickedHandler = () => {
        this.setState({ purchasing: true });
    };

    orderCanceledHandler = () => {
        this.setState({ purchasing: false });
    };

    orderContinueHandler = () => {
        this.props.history.push('/checkout');
    };

    render() {
        const disabledInfo = { ...this.props.ings }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };
        // { salad: true, meat: false...}
        let orderSummary = null;
        let burger = this.state.error ? <p>Burger Ingredients Cannot be loadded</p> : <Spinner />;
        if (this.props.ings) {
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabledInfo={disabledInfo}
                        price={this.props.price}
                        orderNowDisabled={this.updatedOrderNowDisabled(this.props.ings)}
                        orderNowClicked={this.orderNowClickedHandler}
                    />
                </React.Fragment>
            );
            orderSummary = orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                cancel={this.orderCanceledHandler}
                continue={this.orderContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} backdropClicked={this.orderCanceledHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
