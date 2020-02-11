import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { evaluate } from 'mathjs';
import Display from './Display';

export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: '',
            result: '',
            prevStr: '',
            error: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    async handleClick(e) {
        const value = e.currentTarget.value;
        this.setState({ error: '' })
        await this.setState((prv) => ({ string: prv.string.concat('', value) }));
        
    }

    handleClear() {
        this.setState({ string: '', result: '', prevStr: '', error: '' })
    }

    async calculate() {
        if (!this.state.string) {
            return undefined;
        } else {
            try {
                const result = evaluate(this.state.string);
                await this.setState({ result: result, prevStr: this.state.string });
                this.setState({ string: '' });
            } catch {
                this.setState({ error: 'Error', string: '' })
            }
        }

    }

    render() {
        return (
            <Paper elevation={10}>
                <Paper variant='outlined' elevation={0} id="display">
                    <Display
                        string={this.state.string}
                        result={this.state.result}
                        prevStr={this.state.prevStr}
                        error={this.state.error}
                    />

                </Paper>
                <div className='buttons'>
                    <Button onClick={this.handleClear} variant='outlined' color='secondary' id="clear">clear</Button>
                    <Button value={'/'} id='divide' onClick={this.handleClick}>/</Button>
                    <Button value={'.'} id='decimal' onClick={this.handleClick}>.</Button>
                    <Button value={'7'} id='seven' onClick={this.handleClick}>7</Button>
                    <Button value={'8'} id='eight' onClick={this.handleClick}>8</Button>
                    <Button value={'9'} id='nine' onClick={this.handleClick}>9</Button>
                    <Button value={'*'} id='multiply' onClick={this.handleClick}>x</Button>
                    <Button value={'4'} id='four' onClick={this.handleClick}>4</Button>
                    <Button value={'5'} id='five' onClick={this.handleClick}>5</Button>
                    <Button value={'6'} id='six' onClick={this.handleClick}>6</Button>
                    <Button value={'-'} id='subtract' onClick={this.handleClick}>-</Button>
                    <Button value={'1'} id='one' onClick={this.handleClick}>1</Button>
                    <Button value={'2'} id='two' onClick={this.handleClick}>2</Button>
                    <Button value={'3'} id='three' onClick={this.handleClick}>3</Button>
                    <Button value={'+'} id='add' onClick={this.handleClick}>+</Button>
                    <Button value={'0'} id='zero' onClick={this.handleClick}>0</Button>
                    <Button onClick={this.calculate} id="equals">=</Button>

                </div>


            </Paper>
        )
    }
}
