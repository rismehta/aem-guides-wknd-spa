var ssr =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@adobe/json-formula/src/jmespath/Lexer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/Lexer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lexer; });
/* harmony import */ var _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenDefinitions.js */ "./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js");
/* eslint-disable no-underscore-dangle */

const {
  TOK_UNQUOTEDIDENTIFIER,
  TOK_QUOTEDIDENTIFIER,
  TOK_RBRACKET,
  TOK_RPAREN,
  TOK_COMMA,
  TOK_COLON,
  TOK_CONCATENATE,
  TOK_RBRACE,
  TOK_NUMBER,
  TOK_CURRENT,
  TOK_GLOBAL,
  TOK_EXPREF,
  TOK_PIPE,
  TOK_OR,
  TOK_AND,
  TOK_ADD,
  TOK_SUBTRACT,
  TOK_UNARY_MINUS,
  TOK_MULTIPLY,
  TOK_POWER,
  TOK_DIVIDE,
  TOK_UNION,
  TOK_EQ,
  TOK_GT,
  TOK_LT,
  TOK_GTE,
  TOK_LTE,
  TOK_NE,
  TOK_FLATTEN,
  TOK_STAR,
  TOK_FILTER,
  TOK_DOT,
  TOK_NOT,
  TOK_LBRACE,
  TOK_LBRACKET,
  TOK_LPAREN,
  TOK_LITERAL
} = _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// The "&", "[", "<", ">" tokens
// are not in basicToken because
// there are two token variants
// ("&&", "[?", "<=", ">=").  This is specially handled
// below.

const basicTokens = {
  '.': TOK_DOT,
  // "*": TOK_STAR,
  ',': TOK_COMMA,
  ':': TOK_COLON,
  '{': TOK_LBRACE,
  '}': TOK_RBRACE,
  ']': TOK_RBRACKET,
  '(': TOK_LPAREN,
  ')': TOK_RPAREN,
  '@': TOK_CURRENT
};
const globalStartToken = '$';
const operatorStartToken = {
  '<': true,
  '>': true,
  '=': true,
  '!': true
};
const skipChars = {
  ' ': true,
  '\t': true,
  '\n': true
};
function isNum(ch) {
  return ch >= '0' && ch <= '9' || ch === '.';
}
function isAlphaNum(ch) {
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9' || ch === '_';
}
function isIdentifier(stream, pos) {
  const ch = stream[pos];
  // $ is special -- it's allowed to be part of an identifier if it's the first character
  if (ch === '$') {
    return stream.length > pos && isAlphaNum(stream[pos + 1]);
  }
  // return whether character 'isAlpha'
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch === '_';
}
class Lexer {
  constructor() {
    let allowedGlobalNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    this._allowedGlobalNames = allowedGlobalNames;
    this.debug = debug;
  }
  tokenize(stream) {
    const tokens = [];
    this._current = 0;
    let start;
    let identifier;
    let token;
    while (this._current < stream.length) {
      const prev = tokens.length ? tokens.slice(-1)[0].type : null;
      if (this._isGlobal(prev, stream, this._current)) {
        tokens.push(this._consumeGlobal(stream));
      } else if (isIdentifier(stream, this._current)) {
        start = this._current;
        identifier = this._consumeUnquotedIdentifier(stream);
        tokens.push({
          type: TOK_UNQUOTEDIDENTIFIER,
          value: identifier,
          start
        });
      } else if (basicTokens[stream[this._current]] !== undefined) {
        tokens.push({
          type: basicTokens[stream[this._current]],
          value: stream[this._current],
          start: this._current
        });
        this._current += 1;
      } else if (stream[this._current] === '-' && ![TOK_GLOBAL, TOK_CURRENT, TOK_NUMBER, TOK_RPAREN, TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_RBRACKET].includes(prev)) {
        token = this._consumeUnaryMinus(stream);
        tokens.push(token);
      } else if (isNum(stream[this._current])) {
        token = this._consumeNumber(stream);
        tokens.push(token);
      } else if (stream[this._current] === '[') {
        // No need to increment this._current.  This happens
        // in _consumeLBracket
        token = this._consumeLBracket(stream);
        tokens.push(token);
      } else if (stream[this._current] === '"') {
        start = this._current;
        identifier = this._consumeQuotedIdentifier(stream);
        tokens.push({
          type: TOK_QUOTEDIDENTIFIER,
          value: identifier,
          start
        });
      } else if (stream[this._current] === "'") {
        start = this._current;
        identifier = this._consumeRawStringLiteral(stream);
        tokens.push({
          type: TOK_LITERAL,
          value: identifier,
          start
        });
      } else if (stream[this._current] === '`') {
        start = this._current;
        const literal = this._consumeLiteral(stream);
        tokens.push({
          type: TOK_LITERAL,
          value: literal,
          start
        });
      } else if (operatorStartToken[stream[this._current]] !== undefined) {
        tokens.push(this._consumeOperator(stream));
      } else if (skipChars[stream[this._current]] !== undefined) {
        // Ignore whitespace.
        this._current += 1;
      } else if (stream[this._current] === '&') {
        start = this._current;
        this._current += 1;
        if (stream[this._current] === '&') {
          this._current += 1;
          tokens.push({
            type: TOK_AND,
            value: '&&',
            start
          });
        } else if (prev === TOK_COMMA || prev === TOK_LPAREN) {
          // based on previous token we'll know if this & is a JMESPath expression-type
          // or if it's a concatenation operator
          // if we're a function arg then it's an expression-type
          tokens.push({
            type: TOK_EXPREF,
            value: '&',
            start
          });
        } else {
          tokens.push({
            type: TOK_CONCATENATE,
            value: '&',
            start
          });
        }
      } else if (stream[this._current] === '~') {
        start = this._current;
        this._current += 1;
        tokens.push({
          type: TOK_UNION,
          value: '~',
          start
        });
      } else if (stream[this._current] === '+') {
        start = this._current;
        this._current += 1;
        tokens.push({
          type: TOK_ADD,
          value: '+',
          start
        });
      } else if (stream[this._current] === '-') {
        start = this._current;
        this._current += 1;
        tokens.push({
          type: TOK_SUBTRACT,
          value: '-',
          start
        });
      } else if (stream[this._current] === '*') {
        start = this._current;
        this._current += 1;
        // based on previous token we'll know if this asterix is a star -- not a multiply
        // might be better to list the prev tokens that are valid for multiply?
        const prevToken = tokens.length && tokens.slice(-1)[0].type;
        if (tokens.length === 0 || [TOK_LBRACKET, TOK_DOT, TOK_PIPE, TOK_AND, TOK_OR, TOK_COMMA, TOK_COLON].includes(prevToken)) {
          tokens.push({
            type: TOK_STAR,
            value: '*',
            start
          });
        } else {
          tokens.push({
            type: TOK_MULTIPLY,
            value: '*',
            start
          });
        }
      } else if (stream[this._current] === '/') {
        start = this._current;
        this._current += 1;
        tokens.push({
          type: TOK_DIVIDE,
          value: '/',
          start
        });
      } else if (stream[this._current] === '^') {
        start = this._current;
        this._current += 1;
        tokens.push({
          type: TOK_POWER,
          value: '^',
          start
        });
      } else if (stream[this._current] === '|') {
        start = this._current;
        this._current += 1;
        if (stream[this._current] === '|') {
          this._current += 1;
          tokens.push({
            type: TOK_OR,
            value: '||',
            start
          });
        } else {
          tokens.push({
            type: TOK_PIPE,
            value: '|',
            start
          });
        }
      } else {
        const error = new Error(`Unknown character:${stream[this._current]}`);
        error.name = 'LexerError';
        throw error;
      }
    }
    return tokens;
  }
  _consumeUnquotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    while (this._current < stream.length && isAlphaNum(stream[this._current])) {
      this._current += 1;
    }
    return stream.slice(start, this._current);
  }
  _consumeQuotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    let foundNonAlpha = !isIdentifier(stream, start + 1);
    while (stream[this._current] !== '"' && this._current < maxLength) {
      // You can escape a double quote and you can escape an escape.
      let current = this._current;
      if (!isAlphaNum(stream[current])) foundNonAlpha = true;
      if (stream[current] === '\\' && (stream[current + 1] === '\\' || stream[current + 1] === '"')) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    this._current += 1;
    const val = stream.slice(start, this._current);
    // Check for unnecessary double quotes.
    // json-formula uses double quotes to escape characters that don't belong in names names.
    // e.g. "purchase-order".address
    // If we find a double-quoted entity with spaces or all legal characters, issue a warning
    try {
      if (!foundNonAlpha || val.includes(' ')) {
        this.debug.push(`Suspicious quotes: ${val}`);
        this.debug.push(`Did you intend a literal? '${val.replace(/"/g, '')}'?`);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
    return JSON.parse(val);
  }
  _consumeRawStringLiteral(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (stream[this._current] !== "'" && this._current < maxLength) {
      // You can escape a single quote and you can escape an escape.
      let current = this._current;
      if (stream[current] === '\\' && (stream[current + 1] === '\\' || stream[current + 1] === "'")) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    this._current += 1;
    const literal = stream.slice(start + 1, this._current - 1);
    return literal.replaceAll("\\'", "'");
  }
  _consumeNumber(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (isNum(stream[this._current]) && this._current < maxLength) {
      this._current += 1;
    }
    const n = stream.slice(start, this._current);
    let value;
    if (n.includes('.')) {
      value = parseFloat(n);
    } else {
      value = parseInt(n, 10);
    }
    return {
      type: TOK_NUMBER,
      value,
      start
    };
  }
  _consumeUnaryMinus() {
    const start = this._current;
    this._current += 1;
    return {
      type: TOK_UNARY_MINUS,
      value: '-',
      start
    };
  }
  _consumeLBracket(stream) {
    const start = this._current;
    this._current += 1;
    if (stream[this._current] === '?') {
      this._current += 1;
      return {
        type: TOK_FILTER,
        value: '[?',
        start
      };
    }
    if (stream[this._current] === ']') {
      this._current += 1;
      return {
        type: TOK_FLATTEN,
        value: '[]',
        start
      };
    }
    return {
      type: TOK_LBRACKET,
      value: '[',
      start
    };
  }
  _isGlobal(prev, stream, pos) {
    // global tokens occur only at the start of an expression
    if (prev !== null && prev === TOK_DOT) return false;
    const ch = stream[pos];
    if (ch !== globalStartToken) return false;
    // $ is special -- it's allowed to be part of an identifier if it's the first character
    let i = pos + 1;
    while (i < stream.length && isAlphaNum(stream[i])) i += 1;
    const global = stream.slice(pos, i);
    return this._allowedGlobalNames.includes(global);
  }
  _consumeGlobal(stream) {
    const start = this._current;
    this._current += 1;
    while (this._current < stream.length && isAlphaNum(stream[this._current])) this._current += 1;
    const global = stream.slice(start, this._current);
    return {
      type: TOK_GLOBAL,
      name: global,
      start
    };
  }
  _consumeOperator(stream) {
    const start = this._current;
    const startingChar = stream[start];
    this._current += 1;
    if (startingChar === '!') {
      if (stream[this._current] === '=') {
        this._current += 1;
        return {
          type: TOK_NE,
          value: '!=',
          start
        };
      }
      return {
        type: TOK_NOT,
        value: '!',
        start
      };
    }
    if (startingChar === '<') {
      if (stream[this._current] === '=') {
        this._current += 1;
        return {
          type: TOK_LTE,
          value: '<=',
          start
        };
      }
      return {
        type: TOK_LT,
        value: '<',
        start
      };
    }
    if (startingChar === '>') {
      if (stream[this._current] === '=') {
        this._current += 1;
        return {
          type: TOK_GTE,
          value: '>=',
          start
        };
      }
      return {
        type: TOK_GT,
        value: '>',
        start
      };
    }
    // startingChar is '='
    if (stream[this._current] === '=') {
      this._current += 1;
      return {
        type: TOK_EQ,
        value: '==',
        start
      };
    }
    return {
      type: TOK_EQ,
      value: '=',
      start
    };
  }
  _consumeLiteral(stream) {
    function _looksLikeJSON(str) {
      if (str === '') return false;
      if ('[{"'.includes(str[0])) return true;
      if (['true', 'false', 'null'].includes(str)) return true;
      if ('-0123456789'.includes(str[0])) {
        try {
          JSON.parse(str);
          return true;
        } catch (ex) {
          return false;
        }
      } else {
        return false;
      }
    }
    this._current += 1;
    const start = this._current;
    const maxLength = stream.length;
    let literal;
    let inQuotes = false;
    while ((inQuotes || stream[this._current] !== '`') && this._current < maxLength) {
      let current = this._current;
      // bypass escaped double quotes when we're inside quotes
      if (inQuotes && stream[current] === '\\' && stream[current + 1] === '"') current += 2;else {
        if (stream[current] === '"') inQuotes = !inQuotes;
        if (inQuotes && stream[current + 1] === '`') current += 2;else if (stream[current] === '\\' && (stream[current + 1] === '\\' || stream[current + 1] === '`')) {
          // You can escape a literal char or you can escape the escape.
          current += 2;
        } else {
          current += 1;
        }
      }
      this._current = current;
    }
    let literalString = stream.slice(start, this._current).trimStart();
    literalString = literalString.replaceAll('\\`', '`');
    if (_looksLikeJSON(literalString)) {
      literal = JSON.parse(literalString);
    } else {
      // Try to JSON parse it as "<literal>"
      literal = JSON.parse(`"${literalString}"`);
    }
    // +1 gets us to the ending "`", +1 to move on to the next char.
    this._current += 1;
    return literal;
  }
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/Parser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/Parser.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parser; });
/* harmony import */ var _Lexer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer.js */ "./node_modules/@adobe/json-formula/src/jmespath/Lexer.js");
/* harmony import */ var _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenDefinitions.js */ "./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js");



/* eslint-disable no-underscore-dangle */
const {
  TOK_LITERAL,
  TOK_COLON,
  TOK_EOF,
  TOK_UNQUOTEDIDENTIFIER,
  TOK_QUOTEDIDENTIFIER,
  TOK_RBRACKET,
  TOK_RPAREN,
  TOK_COMMA,
  TOK_CONCATENATE,
  TOK_RBRACE,
  TOK_NUMBER,
  TOK_CURRENT,
  TOK_GLOBAL,
  TOK_FIELD,
  TOK_EXPREF,
  TOK_PIPE,
  TOK_OR,
  TOK_AND,
  TOK_ADD,
  TOK_SUBTRACT,
  TOK_UNARY_MINUS,
  TOK_MULTIPLY,
  TOK_POWER,
  TOK_DIVIDE,
  TOK_UNION,
  TOK_EQ,
  TOK_GT,
  TOK_LT,
  TOK_GTE,
  TOK_LTE,
  TOK_NE,
  TOK_FLATTEN,
  TOK_STAR,
  TOK_FILTER,
  TOK_DOT,
  TOK_NOT,
  TOK_LBRACE,
  TOK_LBRACKET,
  TOK_LPAREN
} = _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_1__["default"];
const bindingPower = {
  [TOK_EOF]: 0,
  [TOK_UNQUOTEDIDENTIFIER]: 0,
  [TOK_QUOTEDIDENTIFIER]: 0,
  [TOK_RBRACKET]: 0,
  [TOK_RPAREN]: 0,
  [TOK_COMMA]: 0,
  [TOK_RBRACE]: 0,
  [TOK_NUMBER]: 0,
  [TOK_CURRENT]: 0,
  [TOK_GLOBAL]: 0,
  [TOK_FIELD]: 0,
  [TOK_EXPREF]: 0,
  [TOK_PIPE]: 1,
  [TOK_OR]: 2,
  [TOK_AND]: 3,
  [TOK_CONCATENATE]: 5,
  [TOK_ADD]: 6,
  [TOK_SUBTRACT]: 6,
  [TOK_MULTIPLY]: 7,
  [TOK_DIVIDE]: 7,
  [TOK_POWER]: 7,
  [TOK_UNION]: 7,
  [TOK_EQ]: 5,
  [TOK_GT]: 5,
  [TOK_LT]: 5,
  [TOK_GTE]: 5,
  [TOK_LTE]: 5,
  [TOK_NE]: 5,
  [TOK_FLATTEN]: 9,
  [TOK_STAR]: 20,
  [TOK_FILTER]: 21,
  [TOK_DOT]: 40,
  [TOK_NOT]: 30,
  [TOK_UNARY_MINUS]: 30,
  [TOK_LBRACE]: 50,
  [TOK_LBRACKET]: 55,
  [TOK_LPAREN]: 60
};
class Parser {
  constructor() {
    let allowedGlobalNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    this._allowedGlobalNames = allowedGlobalNames;
  }
  parse(expression, debug) {
    this._loadTokens(expression, debug);
    this.index = 0;
    const ast = this.expression(0);
    if (this._lookahead(0) !== TOK_EOF) {
      const t = this._lookaheadToken(0);
      const error = new Error(`Unexpected token type: ${t.type}, value: ${t.value}`);
      error.name = 'ParserError';
      throw error;
    }
    return ast;
  }
  _loadTokens(expression, debug) {
    const lexer = new _Lexer_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._allowedGlobalNames, debug);
    const tokens = lexer.tokenize(expression);
    tokens.push({
      type: TOK_EOF,
      value: '',
      start: expression.length
    });
    this.tokens = tokens;
  }
  expression(rbp) {
    const leftToken = this._lookaheadToken(0);
    this._advance();
    let left = this.nud(leftToken);
    let currentToken = this._lookahead(0);
    while (rbp < bindingPower[currentToken]) {
      this._advance();
      left = this.led(currentToken, left);
      currentToken = this._lookahead(0);
    }
    return left;
  }
  _lookahead(number) {
    return this.tokens[this.index + number].type;
  }
  _lookaheadToken(number) {
    return this.tokens[this.index + number];
  }
  _advance() {
    this.index += 1;
  }
  _getIndex() {
    return this.index;
  }
  _setIndex(index) {
    this.index = index;
  }

  // eslint-disable-next-line consistent-return
  nud(token) {
    let left;
    let right;
    let expression;
    let node;
    let args;
    switch (token.type) {
      case TOK_LITERAL:
        return {
          type: 'Literal',
          value: token.value
        };
      case TOK_NUMBER:
        return {
          type: 'Number',
          value: token.value
        };
      case TOK_UNQUOTEDIDENTIFIER:
        return {
          type: 'Field',
          name: token.value
        };
      case TOK_QUOTEDIDENTIFIER:
        node = {
          type: 'Field',
          name: token.value
        };
        if (this._lookahead(0) === TOK_LPAREN) {
          throw new Error('Quoted identifier not allowed for function names.');
        }
        return node;
      case TOK_NOT:
        right = this.expression(bindingPower.Not);
        return {
          type: 'NotExpression',
          children: [right]
        };
      case TOK_UNARY_MINUS:
        right = this.expression(bindingPower.UnaryMinus);
        return {
          type: 'UnaryMinusExpression',
          children: [right]
        };
      case TOK_STAR:
        left = {
          type: 'Identity'
        };
        if (this._lookahead(0) === TOK_RBRACKET) {
          // This can happen in a multiselect,
          // [a, b, *]
          right = {
            type: 'Identity'
          };
        } else {
          right = this._parseProjectionRHS(bindingPower.Star);
        }
        return {
          type: 'ValueProjection',
          children: [left, right]
        };
      case TOK_FILTER:
        return this.led(token.type, {
          type: 'Identity'
        });
      case TOK_LBRACE:
        return this._parseMultiselectHash();
      case TOK_FLATTEN:
        left = {
          type: TOK_FLATTEN,
          children: [{
            type: 'Identity'
          }]
        };
        right = this._parseProjectionRHS(bindingPower.Flatten);
        return {
          type: 'Projection',
          children: [left, right]
        };
      case TOK_LBRACKET:
        if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
          this._advance();
          this._advance();
          right = this._parseProjectionRHS(bindingPower.Star);
          return {
            type: 'Projection',
            children: [{
              type: 'Identity'
            }, right]
          };
        }
        return this._parseUnchainedIndexExpression();
      case TOK_CURRENT:
        return {
          type: TOK_CURRENT
        };
      case TOK_GLOBAL:
        return {
          type: TOK_GLOBAL,
          name: token.name
        };
      case TOK_FIELD:
        return {
          type: TOK_FIELD
        };
      case TOK_EXPREF:
        expression = this.expression(bindingPower.Expref);
        return {
          type: 'ExpressionReference',
          children: [expression]
        };
      case TOK_LPAREN:
        args = [];
        while (this._lookahead(0) !== TOK_RPAREN) {
          expression = this.expression(0);
          args.push(expression);
        }
        this._match(TOK_RPAREN);
        return args[0];
      default:
        this._errorToken(token);
    }
  }

  // eslint-disable-next-line consistent-return
  led(tokenName, left) {
    let condition;
    let right;
    let name;
    let args;
    let expression;
    let node;
    let rbp;
    let leftNode;
    let rightNode;
    switch (tokenName) {
      case TOK_CONCATENATE:
        right = this.expression(bindingPower.Concatenate);
        return {
          type: 'ConcatenateExpression',
          children: [left, right]
        };
      case TOK_DOT:
        rbp = bindingPower.Dot;
        if (this._lookahead(0) !== TOK_STAR) {
          right = this._parseDotRHS(rbp);
          return {
            type: 'Subexpression',
            children: [left, right]
          };
        }
        // Creating a projection.
        this._advance();
        right = this._parseProjectionRHS(rbp);
        return {
          type: 'ValueProjection',
          children: [left, right]
        };
      case TOK_PIPE:
        right = this.expression(bindingPower.Pipe);
        return {
          type: TOK_PIPE,
          children: [left, right]
        };
      case TOK_OR:
        right = this.expression(bindingPower.Or);
        return {
          type: 'OrExpression',
          children: [left, right]
        };
      case TOK_AND:
        right = this.expression(bindingPower.And);
        return {
          type: 'AndExpression',
          children: [left, right]
        };
      case TOK_ADD:
        right = this.expression(bindingPower.Add);
        return {
          type: 'AddExpression',
          children: [left, right]
        };
      case TOK_SUBTRACT:
        right = this.expression(bindingPower.Subtract);
        return {
          type: 'SubtractExpression',
          children: [left, right]
        };
      case TOK_MULTIPLY:
        right = this.expression(bindingPower.Multiply);
        return {
          type: 'MultiplyExpression',
          children: [left, right]
        };
      case TOK_DIVIDE:
        right = this.expression(bindingPower.Divide);
        return {
          type: 'DivideExpression',
          children: [left, right]
        };
      case TOK_POWER:
        right = this.expression(bindingPower.Power);
        return {
          type: 'PowerExpression',
          children: [left, right]
        };
      case TOK_UNION:
        right = this.expression(bindingPower.Power);
        return {
          type: 'UnionExpression',
          children: [left, right]
        };
      case TOK_LPAREN:
        name = left.name;
        args = [];
        while (this._lookahead(0) !== TOK_RPAREN) {
          expression = this.expression(0);
          if (this._lookahead(0) === TOK_COMMA) {
            this._match(TOK_COMMA);
          }
          args.push(expression);
        }
        this._match(TOK_RPAREN);
        node = {
          type: 'Function',
          name,
          children: args
        };
        return node;
      case TOK_FILTER:
        condition = this.expression(0);
        this._match(TOK_RBRACKET);
        if (this._lookahead(0) === TOK_FLATTEN) {
          right = {
            type: 'Identity'
          };
        } else {
          right = this._parseProjectionRHS(bindingPower.Filter);
        }
        return {
          type: 'FilterProjection',
          children: [left, right, condition]
        };
      case TOK_FLATTEN:
        leftNode = {
          type: TOK_FLATTEN,
          children: [left]
        };
        rightNode = this._parseProjectionRHS(bindingPower.Flatten);
        return {
          type: 'Projection',
          children: [leftNode, rightNode]
        };
      case TOK_EQ:
      case TOK_NE:
      case TOK_GT:
      case TOK_GTE:
      case TOK_LT:
      case TOK_LTE:
        return this._parseComparator(left, tokenName);
      case TOK_LBRACKET:
        if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
          this._advance();
          this._advance();
          right = this._parseProjectionRHS(bindingPower.Star);
          return {
            type: 'Projection',
            children: [left, right]
          };
        }
        right = this._parseChainedIndexExpression();
        return this._projectIfSlice(left, right);
      default:
        this._errorToken(this._lookaheadToken(0));
    }
  }
  _match(tokenType) {
    if (this._lookahead(0) === tokenType) {
      this._advance();
    } else {
      const t = this._lookaheadToken(0);
      const error = new Error(`Expected ${tokenType}, got: ${t.type}`);
      error.name = 'ParserError';
      throw error;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _errorToken(token) {
    const error = new Error(`Invalid token (${token.type}): "${token.value}"`);
    error.name = 'ParserError';
    throw error;
  }
  _parseChainedIndexExpression() {
    const oldIndex = this._getIndex();
    if (this._lookahead(0) === TOK_COLON) {
      return this._parseSliceExpression();
    }
    // look ahead of the first expression to determine the type
    const first = this.expression(0);
    const token = this._lookahead(0);
    if (token === TOK_COLON) {
      // now that we know the type revert back to the old position and parse
      this._setIndex(oldIndex);
      return this._parseSliceExpression();
    }
    this._match(TOK_RBRACKET);
    return {
      type: 'Index',
      value: first
    };
  }
  _parseUnchainedIndexExpression() {
    const oldIndex = this._getIndex();
    const firstToken = this._lookahead(0);
    if (firstToken === TOK_COLON) {
      const right = this._parseSliceExpression();
      return this._projectIfSlice({
        type: 'Identity'
      }, right);
    }
    const first = this.expression(0);
    const currentToken = this._lookahead(0);
    if (currentToken === TOK_COMMA) {
      this._setIndex(oldIndex);
      return this._parseMultiselectList();
    }
    if (currentToken === TOK_COLON) {
      this._setIndex(oldIndex);
      const right = this._parseSliceExpression();
      return this._projectIfSlice({
        type: 'Identity'
      }, right);
    }
    if (firstToken === TOK_NUMBER || firstToken === TOK_UNARY_MINUS) {
      this._match(TOK_RBRACKET);
      return {
        type: 'Index',
        value: first
      };
    }
    this._setIndex(oldIndex);
    return this._parseMultiselectList();
  }
  _projectIfSlice(left, right) {
    const indexExpr = {
      type: 'IndexExpression',
      children: [left, right]
    };
    if (right.type === 'Slice') {
      return {
        type: 'Projection',
        children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
      };
    }
    return indexExpr;
  }
  _parseSliceExpression() {
    // [start:end:step] where each part is optional, as well as the last
    // colon.
    const parts = [null, null, null];
    let index = 0;
    let currentToken = this._lookahead(0);
    while (currentToken !== TOK_RBRACKET && index < 3) {
      if (currentToken === TOK_COLON && index < 2) {
        // there can't be more than 2 colons
        index += 1;
        this._advance();
      } else {
        parts[index] = this.expression(0);
        // check next token to be either colon or rbracket
        const t = this._lookahead(0);
        if (t !== TOK_COLON && t !== TOK_RBRACKET) {
          const error = new Error(`Syntax error, unexpected token: ${t.value}(${t.type})`);
          error.name = 'Parsererror';
          throw error;
        }
      }
      currentToken = this._lookahead(0);
    }
    this._match(TOK_RBRACKET);
    return {
      type: 'Slice',
      children: parts
    };
  }
  _parseComparator(left, comparator) {
    const right = this.expression(bindingPower[comparator]);
    return {
      type: 'Comparator',
      name: comparator,
      children: [left, right]
    };
  }

  // eslint-disable-next-line consistent-return
  _parseDotRHS(rbp) {
    const lookahead = this._lookahead(0);
    const exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
    if (exprTokens.indexOf(lookahead) >= 0) {
      return this.expression(rbp);
    }
    if (lookahead === TOK_LBRACKET) {
      this._match(TOK_LBRACKET);
      return this._parseMultiselectList();
    }
    if (lookahead === TOK_LBRACE) {
      this._match(TOK_LBRACE);
      return this._parseMultiselectHash();
    }
  }
  _parseProjectionRHS(rbp) {
    let right;
    if (bindingPower[this._lookahead(0)] < 10) {
      right = {
        type: 'Identity'
      };
    } else if (this._lookahead(0) === TOK_LBRACKET) {
      right = this.expression(rbp);
    } else if (this._lookahead(0) === TOK_FILTER) {
      right = this.expression(rbp);
    } else if (this._lookahead(0) === TOK_DOT) {
      this._match(TOK_DOT);
      right = this._parseDotRHS(rbp);
    } else {
      const t = this._lookaheadToken(0);
      const error = new Error(`Sytanx error, unexpected token: ${t.value}(${t.type})`);
      error.name = 'ParserError';
      throw error;
    }
    return right;
  }
  _parseMultiselectList() {
    const expressions = [];
    while (this._lookahead(0) !== TOK_RBRACKET) {
      const expression = this.expression(0);
      expressions.push(expression);
      if (this._lookahead(0) === TOK_COMMA) {
        this._match(TOK_COMMA);
        if (this._lookahead(0) === TOK_RBRACKET) {
          throw new Error('Unexpected token Rbracket');
        }
      }
    }
    this._match(TOK_RBRACKET);
    return {
      type: 'MultiSelectList',
      children: expressions
    };
  }
  _parseMultiselectHash() {
    const pairs = [];
    const identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
    let keyToken;
    let keyName;
    let value;
    let node;
    if (this._lookahead(0) === TOK_RBRACE) {
      this._advance();
      return {
        type: 'MultiSelectHash',
        children: []
      };
    }
    for (;;) {
      keyToken = this._lookaheadToken(0);
      if (identifierTypes.indexOf(keyToken.type) < 0) {
        throw new Error(`Expecting an identifier token, got: ${keyToken.type}`);
      }
      keyName = keyToken.value;
      this._advance();
      this._match(TOK_COLON);
      value = this.expression(0);
      node = {
        type: 'KeyValuePair',
        name: keyName,
        value
      };
      pairs.push(node);
      if (this._lookahead(0) === TOK_COMMA) {
        this._match(TOK_COMMA);
      } else if (this._lookahead(0) === TOK_RBRACE) {
        this._match(TOK_RBRACE);
        break;
      }
    }
    return {
      type: 'MultiSelectHash',
      children: pairs
    };
  }
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/TreeInterpreter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/TreeInterpreter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeInterpreter; });
/* harmony import */ var _matchType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchType.js */ "./node_modules/@adobe/json-formula/src/jmespath/matchType.js");
/* harmony import */ var _dataTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTypes.js */ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js");
/* harmony import */ var _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenDefinitions.js */ "./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@adobe/json-formula/src/jmespath/utils.js");




const {
  TOK_CURRENT,
  TOK_GLOBAL,
  TOK_EXPREF,
  TOK_PIPE,
  TOK_EQ,
  TOK_GT,
  TOK_LT,
  TOK_GTE,
  TOK_LTE,
  TOK_NE,
  TOK_FLATTEN
} = _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_2__["default"];
const {
  TYPE_STRING,
  TYPE_ARRAY_STRING,
  TYPE_ARRAY
} = _dataTypes_js__WEBPACK_IMPORTED_MODULE_1__["default"];
function isFalse(value) {
  // From the spec:
  // A false value corresponds to the following values:
  // Empty list
  // Empty object
  // Empty string
  // False boolean
  // null value
  // (new) use JS truthy evaluation.  This changes the spec behavior.
  // Where in the past a zero (0) would be True, it's now false

  // First check the scalar values.
  if (value === null) return true;
  // in case it's an object with a valueOf defined
  const obj = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getValueOf"])(value);
  if (obj === '' || obj === false || obj === null) {
    return true;
  }
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(obj) && obj.length === 0) {
    // Check for an empty array.
    return true;
  }
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isObject"])(obj)) {
    // Check for an empty object.
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      // If there are any keys, then
      // the object is not empty so the object
      // is not false.
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  return !obj;
}
function objValues(obj) {
  return Object.values(obj);
}
class TreeInterpreter {
  constructor(runtime, globals, toNumber, toString, debug, language) {
    this.runtime = runtime;
    this.globals = globals;
    this.toNumber = toNumber;
    this.toString = toString;
    this.debug = debug;
    this.language = language;
  }
  search(node, value) {
    return this.visit(node, value);
  }
  visit(n, v) {
    const visitFunctions = {
      Field: (node, value) => {
        // we used to check isObject(value) here -- but it is possible for an array-based
        // object to have properties.  So we'll allow the child check on objects and arrays.
        if (value !== null && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value))) {
          let field = value[node.name];
          // fields can be objects with overridden methods. e.g. valueOf
          // so don't resolve to a function...
          if (typeof field === 'function') field = undefined;
          if (field === undefined) {
            try {
              this.debug.push(`Failed to find: '${node.name}'`);
              const available = Object.keys(value).map(a => `'${a}'`).toString();
              if (available.length) this.debug.push(`Available fields: ${available}`);
              // eslint-disable-next-line no-empty
            } catch (e) {}
            return null;
          }
          return field;
        }
        return null;
      },
      Subexpression: (node, value) => {
        let result = this.visit(node.children[0], value);
        for (let i = 1; i < node.children.length; i += 1) {
          result = this.visit(node.children[1], result);
          if (result === null) return null;
        }
        return result;
      },
      IndexExpression: (node, value) => {
        const left = this.visit(node.children[0], value);
        return this.visit(node.children[1], left);
      },
      Index: (node, value) => {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value)) {
          let index = this.toNumber(this.visit(node.value, value));
          if (index < 0) {
            index = value.length + index;
          }
          const result = value[index];
          if (result === undefined) {
            this.debug.push(`Index ${index} out of range`);
            return null;
          }
          return result;
        }
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
          const key = this.toString(this.visit(node.value, value));
          const result = value[key];
          if (result === undefined) {
            this.debug.push(`Key ${key} does not exist`);
            return null;
          }
          return result;
        }
        this.debug.push(`left side of index expression ${value} is not an array or object.`);
        return null;
      },
      Slice: (node, value) => {
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value)) return null;
        const sliceParams = node.children.slice(0).map(param => param != null ? this.toNumber(this.visit(param, value)) : null);
        const computed = this.computeSliceParams(value.length, sliceParams);
        const [start, stop, step] = computed;
        const result = [];
        if (step > 0) {
          for (let i = start; i < stop; i += step) {
            result.push(value[i]);
          }
        } else {
          for (let i = start; i > stop; i += step) {
            result.push(value[i]);
          }
        }
        return result;
      },
      Projection: (node, value) => {
        // Evaluate left child.
        const base = this.visit(node.children[0], value);
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(base)) return null;
        const collected = [];
        base.forEach(b => {
          const current = this.visit(node.children[1], b);
          if (current !== null) {
            collected.push(current);
          }
        });
        return collected;
      },
      ValueProjection: (node, value) => {
        // Evaluate left child.
        const projection = this.visit(node.children[0], value);
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isObject"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getValueOf"])(projection))) return null;
        const collected = [];
        const values = objValues(projection);
        values.forEach(val => {
          const current = this.visit(node.children[1], val);
          if (current !== null) collected.push(current);
        });
        return collected;
      },
      FilterProjection: (node, value) => {
        const base = this.visit(node.children[0], value);
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(base)) return null;
        const filtered = base.filter(b => {
          const matched = this.visit(node.children[2], b);
          return !isFalse(matched);
        });
        const finalResults = [];
        filtered.forEach(f => {
          const current = this.visit(node.children[1], f);
          if (current !== null) finalResults.push(current);
        });
        return finalResults;
      },
      Comparator: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        if (node.name === TOK_EQ) return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["strictDeepEqual"])(first, second);
        if (node.name === TOK_NE) return !Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["strictDeepEqual"])(first, second);
        if (node.name === TOK_GT) return first > second;
        if (node.name === TOK_GTE) return first >= second;
        if (node.name === TOK_LT) return first < second;
        if (node.name === TOK_LTE) return first <= second;
        throw new Error(`Unknown comparator: ${node.name}`);
      },
      [TOK_FLATTEN]: (node, value) => {
        const original = this.visit(node.children[0], value);
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(original)) return null;
        const merged = [];
        original.forEach(current => {
          if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(current)) {
            merged.push(...current);
          } else {
            merged.push(current);
          }
        });
        return merged;
      },
      Identity: (_node, value) => value,
      MultiSelectList: (node, value) => {
        if (value === null) return null;
        return node.children.map(child => this.visit(child, value));
      },
      MultiSelectHash: (node, value) => {
        if (value === null) return null;
        const collected = {};
        node.children.forEach(child => {
          collected[child.name] = this.visit(child.value, value);
        });
        return collected;
      },
      OrExpression: (node, value) => {
        let matched = this.visit(node.children[0], value);
        if (isFalse(matched)) matched = this.visit(node.children[1], value);
        return matched;
      },
      AndExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        if (isFalse(first) === true) return first;
        return this.visit(node.children[1], value);
      },
      AddExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        return this.applyOperator(first, second, '+');
      },
      ConcatenateExpression: (node, value) => {
        let first = this.visit(node.children[0], value);
        let second = this.visit(node.children[1], value);
        first = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["matchType"])(Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["getTypeNames"])(first), [TYPE_STRING, TYPE_ARRAY_STRING], first, 'concatenate', this.toNumber, this.toString);
        second = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["matchType"])(Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["getTypeNames"])(second), [TYPE_STRING, TYPE_ARRAY_STRING], second, 'concatenate', this.toNumber, this.toString);
        return this.applyOperator(first, second, '&');
      },
      UnionExpression: (node, value) => {
        let first = this.visit(node.children[0], value);
        let second = this.visit(node.children[1], value);
        first = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["matchType"])(Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["getTypeNames"])(first), [TYPE_ARRAY], first, 'union', this.toNumber, this.toString);
        second = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["matchType"])(Object(_matchType_js__WEBPACK_IMPORTED_MODULE_0__["getTypeNames"])(second), [TYPE_ARRAY], second, 'union', this.toNumber, this.toString);
        return first.concat(second);
      },
      SubtractExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        return this.applyOperator(first, second, '-');
      },
      MultiplyExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        return this.applyOperator(first, second, '*');
      },
      DivideExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        return this.applyOperator(first, second, '/');
      },
      PowerExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        const second = this.visit(node.children[1], value);
        return this.applyOperator(first, second, '^');
      },
      NotExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        return isFalse(first);
      },
      UnaryMinusExpression: (node, value) => {
        const first = this.visit(node.children[0], value);
        return first * -1;
      },
      Literal: node => node.value,
      Number: node => node.value,
      [TOK_PIPE]: (node, value) => {
        const left = this.visit(node.children[0], value);
        return this.visit(node.children[1], left);
      },
      [TOK_CURRENT]: (_node, value) => value,
      [TOK_GLOBAL]: node => {
        const result = this.globals[node.name];
        return result === undefined ? null : result;
      },
      Function: (node, value) => {
        // Special case for if()
        // we need to make sure the results are called only after the condition is evaluated
        // Otherwise we end up with both results invoked -- which could include side effects
        // For "if", the last parameter to callFunction is false (bResolved) to indicate there's
        // no point in validating the argument type.
        if (node.name === 'if') return this.runtime.callFunction(node.name, node.children, value, this, false);
        const resolvedArgs = node.children.map(child => this.visit(child, value));
        return this.runtime.callFunction(node.name, resolvedArgs, value, this);
      },
      ExpressionReference: node => {
        const [refNode] = node.children;
        // Tag the node with a specific attribute so the type
        // checker verify the type.
        refNode.jmespathType = TOK_EXPREF;
        return refNode;
      }
    };
    const fn = n && visitFunctions[n.type];
    if (!fn) throw new Error(`Unknown/missing node type ${n && n.type || ''}`);
    return fn(n, v);
  }

  // eslint-disable-next-line class-methods-use-this
  computeSliceParams(arrayLength, sliceParams) {
    function capSliceRange(arrayLen, actual, stp) {
      let actualValue = actual;
      if (actualValue < 0) {
        actualValue += arrayLen;
        if (actualValue < 0) {
          actualValue = stp < 0 ? -1 : 0;
        }
      } else if (actualValue >= arrayLen) {
        actualValue = stp < 0 ? arrayLen - 1 : arrayLen;
      }
      return actualValue;
    }
    let [start, stop, step] = sliceParams;
    if (step === null) {
      step = 1;
    } else if (step === 0) {
      const error = new Error('Invalid slice, step cannot be 0');
      error.name = 'RuntimeError';
      throw error;
    }
    const stepValueNegative = step < 0;
    if (start === null) {
      start = stepValueNegative ? arrayLength - 1 : 0;
    } else {
      start = capSliceRange(arrayLength, start, step);
    }
    if (stop === null) {
      stop = stepValueNegative ? -1 : arrayLength;
    } else {
      stop = capSliceRange(arrayLength, stop, step);
    }
    return [start, stop, step];
  }
  applyOperator(first, second, operator) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(first) && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(second)) {
      // balance the size of the arrays
      const shorter = first.length < second.length ? first : second;
      const diff = Math.abs(first.length - second.length);
      shorter.length += diff;
      shorter.fill(null, shorter.length - diff);
      const result = [];
      for (let i = 0; i < first.length; i += 1) {
        result.push(this.applyOperator(first[i], second[i], operator));
      }
      return result;
    }
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(first)) return first.map(a => this.applyOperator(a, second, operator));
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(second)) return second.map(a => this.applyOperator(first, a, operator));
    if (operator === '*') return this.toNumber(first) * this.toNumber(second);
    if (operator === '&') return first + second;
    if (operator === '+') {
      return this.toNumber(first) + this.toNumber(second);
    }
    if (operator === '-') return this.toNumber(first) - this.toNumber(second);
    if (operator === '/') {
      const result = first / second;
      return Number.isFinite(result) ? result : null;
    }
    if (operator === '^') {
      return first ** second;
    }
    throw new Error(`Unknown operator: ${operator}`);
  }
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Type constants used to define functions.
/* harmony default export */ __webpack_exports__["default"] = ({
  TYPE_NUMBER: 0,
  TYPE_ANY: 1,
  TYPE_STRING: 2,
  TYPE_ARRAY: 3,
  TYPE_OBJECT: 4,
  TYPE_BOOLEAN: 5,
  TYPE_EXPREF: 6,
  TYPE_NULL: 7,
  TYPE_ARRAY_NUMBER: 8,
  TYPE_ARRAY_STRING: 9,
  TYPE_CLASS: 10,
  TYPE_ARRAY_ARRAY: 11
});

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/functions.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return functions; });
/* harmony import */ var _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTypes.js */ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js");
/*
Copyright 2014 James Saryerwinnie

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

NOTICE:
This file is substantially modified from the original source taken from:
https://github.com/jmespath/jmespath.js

*/

/* eslint-disable no-underscore-dangle */

function functions(runtime, isObject, isArray, toNumber, getTypeName, valueOf, toString, debug) {
  const {
    TYPE_NUMBER,
    TYPE_ANY,
    TYPE_STRING,
    TYPE_ARRAY,
    TYPE_OBJECT,
    TYPE_BOOLEAN,
    TYPE_EXPREF,
    TYPE_NULL,
    TYPE_ARRAY_NUMBER,
    TYPE_ARRAY_STRING
  } = _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  function createKeyFunction(exprefNode, allowedTypes) {
    return x => {
      const current = runtime.interpreter.visit(exprefNode, x);
      if (allowedTypes.indexOf(getTypeName(current)) < 0) {
        const msg = `TypeError: expected one of ${allowedTypes}, received ${getTypeName(current)}`;
        throw new Error(msg);
      }
      return current;
    };
  }
  const functionMap = {
    // name: [function, <signature>]
    // The <signature> can be:
    //
    // {
    //   args: [[type1, type2], [type1, type2]],
    //   variadic: true|false
    // }
    //
    // Each arg in the arg list is a list of valid types
    // (if the function is overloaded and supports multiple
    // types.  If the type is "any" then no type checking
    // occurs on the argument.  Variadic is optional
    // and if not provided is assumed to be false.
    /**
     * Returns the absolute value of the provided argument `value`.
     * @param {number} value argument whose absolute value has to be returned
     * @return {number} returns the absolute value of the `value` argument
     * @function abs
     * @example
     * abs(-1) //returns 1
     * @category jmespath
     */
    abs: {
      _func: resolvedArgs => Math.abs(resolvedArgs[0]),
      _signature: [{
        types: [TYPE_NUMBER]
      }]
    },
    /**
     * Returns the average of the elements in the provided array.
     * An empty array will produce a return value of `null`.
     * @param {number[]} elements array of elements whose average has to be computed
     * @return {number} average value
     * @function avg
     * @example
     * avg([]) //returns null
     * @example
     * avg([1, 2, 3]) //returns 2
     * @category jmespath
     */
    avg: {
      _func: resolvedArgs => {
        let sum = 0;
        const inputArray = resolvedArgs[0];
        inputArray.forEach(a => {
          sum += a;
        });
        return sum / inputArray.length;
      },
      _signature: [{
        types: [TYPE_ARRAY_NUMBER]
      }]
    },
    /**
     * Returns the next highest integer value of the argument `num` by rounding up if necessary.
     * @param {number} num number whose next highest integer value has to be computed
     * @return {number}
     * @function ceil
     * @example
     * ceil(10) //returns 10
     * @example
     * ceil(10.4) //return 11
     * @category jmespath
     */
    ceil: {
      _func: resolvedArgs => Math.ceil(resolvedArgs[0]),
      _signature: [{
        types: [TYPE_NUMBER]
      }]
    },
    /**
     * Returns true if the given `subject` contains the provided `search` string.
     * If `subject` is an array, this function returns true if one of the elements
     * in the array is equal to the provided `search` value. If the provided `subject`
     *  is a string, this function returns true if the string contains the provided
     * `search` argument.
     * @param {array|string} subject the subject in which the element has to be searched
     * @param {string|boolean|number|date} search element to search
     * @return {boolean}
     * @function contains
     * @example
     * contains([1, 2, 3, 4], 2) //returns true
     * @example
     * contains([1, 2, 3, 4], -1) //returns false
     * @example
     * contains('Abcd', 'd') //returns true
     * @example
     * contains('Abcd', 'x') //returns false
     * @category jmespath
     */
    contains: {
      _func: resolvedArgs => valueOf(resolvedArgs[0]).indexOf(valueOf(resolvedArgs[1])) >= 0,
      _signature: [{
        types: [TYPE_STRING, TYPE_ARRAY]
      }, {
        types: [TYPE_ANY]
      }]
    },
    /**
     * Returns true if the `subject` ends with the `suffix`, otherwise this function returns false.
     * @param {string} subject subject in which the `suffix` is being searched for
     * @param {string} suffix suffix to search in the subject
     * @return {boolean}
     * @function endsWith
     * @example
     * endsWith('Abcd', 'd') //returns true
     * @example
     * endsWith('Abcd', 'A') //returns false
     * @category jmespath
     */
    endsWith: {
      _func: resolvedArgs => {
        const searchStr = valueOf(resolvedArgs[0]);
        const suffix = valueOf(resolvedArgs[1]);
        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
      },
      _signature: [{
        types: [TYPE_STRING]
      }, {
        types: [TYPE_STRING]
      }]
    },
    /**
     * Returns the next lowest integer value of the argument `num` by rounding down if necessary.
     * @param {number} num number whose next lowest integer value has to be returned
     * @return {number}
     * @function floor
     * @example
     * floor(10.4) //returns 10
     * @example
     * floor(10) //returns 10
     * @category jmespath
     */
    floor: {
      _func: resolvedArgs => Math.floor(resolvedArgs[0]),
      _signature: [{
        types: [TYPE_NUMBER]
      }]
    },
    /**
     * Returns all the elements from the provided `stringsarray`
     * array joined together using the `glue` argument as a separator between each.
     * @param {string} glue
     * @param {string[]} stringsarray
     * @return {string}
     * @function join
     * @example
     * join(',', ['a', 'b', 'c']) //returns 'a,b,c'
     * @category jmespath
     */
    join: {
      _func: resolvedArgs => {
        const joinChar = resolvedArgs[0];
        const listJoin = resolvedArgs[1];
        return listJoin.join(joinChar);
      },
      _signature: [{
        types: [TYPE_STRING]
      }, {
        types: [TYPE_ARRAY_STRING]
      }]
    },
    /**
     * Returns an array containing the keys of the provided object `obj`. If the passed
     * object is null, the value returned is an empty array
     * @param {object} obj the object whose keys need to be extracted
     * @return {array}
     * @function keys
     * @example
     * keys({a : 3, b : 4}) //returns ['a', 'b']
     * @category jmespath
     */
    keys: {
      _func: resolvedArgs => {
        if (resolvedArgs[0] === null) return [];
        return Object.keys(resolvedArgs[0]);
      },
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * Returns the length of the given argument `subject` using the following types rules:
     * * string: returns the number of code points in the string
     * * array: returns the number of elements in the array
     * * object: returns the number of key-value pairs in the object
     * @param {string | array | object} subject subject whose length has to be calculated
     * @return {number}
     * @function length
     * @example
     * length([]) //returns 0
     * @example
     * length('') //returns 0
     * @example
     * length('abcd') //returns 4
     * @example
     * length([1, 2, 3, 4]) //returns 4
     * @example
     * length({}) // returns 0
     * @example
     * length({a : 3, b : 4}) //returns 2
     * @category jmespath
     */
    length: {
      _func: resolvedArgs => {
        const arg = valueOf(resolvedArgs[0]);
        if (isObject(arg)) return Object.keys(arg).length;
        return isArray(arg) ? arg.length : toString(arg).length;
      },
      _signature: [{
        types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]
      }]
    },
    /**
     * Apply the `expr` to every element in the `elements` array and return the array of results.
     * An elements of length N will produce a return array of length N. Unlike a projection,
     * `[*].bar`, `map()` will include the result of applying the `expr` for every element
     * in the elements array, even if the result is `null`.
     * @param {expression} expr expression to evaluate on each element
     * @param {array} elements array of elements on which the expression will be evaluated
     * @return {array}
     * @function map
     * @example
     * map(&(@ + 1), [1, 2, 3, 4]) // returns [2, 3, 4, 5]
     * @example
     * map(&length(@), ['doe', 'nick', 'chris']) // returns [3,4, 5]
     * @category jmespath
     */
    map: {
      _func: resolvedArgs => {
        const exprefNode = resolvedArgs[0];
        return resolvedArgs[1].map(arg => runtime.interpreter.visit(exprefNode, arg));
      },
      _signature: [{
        types: [TYPE_EXPREF]
      }, {
        types: [TYPE_ARRAY]
      }]
    },
    /**
     * Returns the highest value in the provided `collection` arguments.
     * If all collections are empty `null` is returned.
     * max() can work on numbers or strings.
     * If a mix of numbers and strings are provided, the type of the first value will be used.
     * @param {number[]|string[]} collection array in which the maximum element is to be calculated
     * @return {number}
     * @function max
     * @example
     * max([1, 2, 3], [4, 5, 6], 7) //returns 7
     * @example
     * max([]) // returns null
     * @example
     * max(['a', 'a1', 'b']) // returns 'b'
     * @category jmespath
     */
    max: {
      _func: args => {
        // flatten the args into a single array
        const array = args.reduce((prev, cur) => {
          if (Array.isArray(cur)) prev.push(...cur);else prev.push(cur);
          return prev;
        }, []);
        const first = array.find(r => r !== null);
        if (array.length === 0 || first === undefined) return null;
        // use the first value to determine the comparison type
        const isNumber = getTypeName(first, true) === TYPE_NUMBER;
        const compare = isNumber ? (prev, cur) => {
          const current = toNumber(cur);
          return prev <= current ? current : prev;
        } : (prev, cur) => {
          const current = toString(cur);
          return prev.localeCompare(current) === 1 ? prev : current;
        };
        return array.reduce(compare, isNumber ? toNumber(first) : toString(first));
      },
      _signature: [{
        types: [TYPE_ARRAY, TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING],
        variadic: true
      }]
    },
    /**
     * Returns the maximum element in an array using the expression `expr` as the comparison key.
     * The entire element is returned.
     * @param {array} elements the array in which the maximum element is to be found
     * @param {expression} expr the expr to use as the `comparison` key
     * @return {any}
     * @function maxBy
     * @example
     * maxBy(['abcd', 'e', 'def'], &length(@)) //returns 'abcd'
     * @example
     * maxBy([{year: 2010}, {year: 2020}, {year: 1910}], &year) //returns {year: 2020}
     * @category jmespath
     */
    maxBy: {
      _func: resolvedArgs => {
        const exprefNode = resolvedArgs[1];
        const resolvedArray = resolvedArgs[0];
        const keyFunction = createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
        let maxNumber = -Infinity;
        let maxRecord;
        let current;
        resolvedArray.forEach(arg => {
          current = keyFunction(arg);
          if (current > maxNumber) {
            maxNumber = current;
            maxRecord = arg;
          }
        });
        return maxRecord;
      },
      _signature: [{
        types: [TYPE_ARRAY]
      }, {
        types: [TYPE_EXPREF]
      }]
    },
    /**
     * Accepts 0 or more objects as arguments, and returns a single object with
     * subsequent objects merged. Each subsequent object’s key/value pairs are
     * added to the preceding object. This function is used to combine multiple
     * objects into one. You can think of this as the first object being the base object,
     * and each subsequent argument being overrides that are applied to the base object.
     * @param {...object} args
     * @return {object}
     * @function merge
     * @example
     * merge({a: 1, b: 2}, {c : 3, d: 4}) // returns {a :1, b: 2, c: 3, d: 4}
     * @example
     * merge({a: 1, b: 2}, {a : 3, d: 4}) // returns {a :3, b: 2, d: 4}
     * @category jmespath
     */
    merge: {
      _func: resolvedArgs => {
        const merged = {};
        resolvedArgs.forEach(current => {
          Object.entries(current || {}).forEach(_ref => {
            let [key, value] = _ref;
            merged[key] = value;
          });
        });
        return merged;
      },
      _signature: [{
        types: [TYPE_OBJECT],
        variadic: true
      }]
    },
    /**
     * Returns the lowest value in the provided `collection` arguments.
     * If all collections are empty `null` is returned.
     * min() can work on numbers or strings.
     * If a mix of numbers and strings are provided, the type of the first value will be used.
     * @param {number[]|string[]} collection array in which the minimum element is to be calculated
     * @return {number}
     * @function min
     * @example
     * min([1, 2, 3], [4, 5, 6], 7) //returns 1
     * @example
     * min([]) // returns null
     * @example
     * min(['a', 'a1', 'b']) // returns 'a'
     * @category jmespath
     */
    min: {
      _func: args => {
        // flatten the args into a single array
        const array = args.reduce((prev, cur) => {
          if (Array.isArray(cur)) prev.push(...cur);else prev.push(cur);
          return prev;
        }, []);
        const first = array.find(r => r !== null);
        if (array.length === 0 || first === undefined) return null;
        // use the first value to determine the comparison type
        const isNumber = getTypeName(first, true) === TYPE_NUMBER;
        const compare = isNumber ? (prev, cur) => {
          const current = toNumber(cur);
          return prev <= current ? prev : current;
        } : (prev, cur) => {
          const current = toString(cur);
          return prev.localeCompare(current) === 1 ? current : prev;
        };
        return array.reduce(compare, isNumber ? toNumber(first) : toString(first));
      },
      _signature: [{
        types: [TYPE_ARRAY, TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING],
        variadic: true
      }]
    },
    /**
     * Returns the minimum element in `elements` array using the expression `expr`
     * as the comparison key.
     * @param {array} elements
     * @param {expression} expr expression that returns either a string or a number
     * @return {any}
     * @function minBy
     * @example
     * minBy(['abcd', 'e', 'def'], &length(@)) //returns 'e'
     * @example
     * minBy([{year: 2010}, {year: 2020}, {year: 1910}], &year) //returns {year: 1910}
     * @category jmespath
     */
    minBy: {
      _func: resolvedArgs => {
        const exprefNode = resolvedArgs[1];
        const resolvedArray = resolvedArgs[0];
        const keyFunction = createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
        let minNumber = Infinity;
        let minRecord;
        let current;
        resolvedArray.forEach(arg => {
          current = keyFunction(arg);
          if (current < minNumber) {
            minNumber = current;
            minRecord = arg;
          }
        });
        return minRecord;
      },
      _signature: [{
        types: [TYPE_ARRAY]
      }, {
        types: [TYPE_EXPREF]
      }]
    },
    /**
     * Returns the first argument that does not resolve to `null`.
     * This function accepts one or more arguments, and will evaluate
     * them in order until a non null argument is encounted. If all
     * arguments values resolve to null, then a value of null is returned.
     * @param {...any} argument
     * @return {any}
     * @function notNull
     * @example
     * notNull(1, 2, 3, 4, `null`) //returns 1
     * @example
     * notNull(`null`, 2, 3, 4, `null`) //returns 2
     * @category jmespath
     */
    notNull: {
      _func: resolvedArgs => resolvedArgs.find(arg => getTypeName(arg) !== TYPE_NULL) || null,
      _signature: [{
        types: [TYPE_ANY],
        variadic: true
      }]
    },
    /**
     * executes a user-supplied reducer expression `expr` on each element of the
     * array, in order, passing in the return value from the calculation on the preceding element.
     * The final result of running the reducer across all elements of the `elements` array is a
     * single value.
     * The expression can access the following properties
     * * accumulated: accumulated value based on the previous calculations. Initial value is `null`
     * * current: current element to process
     * * index: index of the `current` element in the array
     * * array: original array
     * @param {expression} expr reducer expr to be executed on each element
     * @param {array} elements array of elements on which the expression will be evaluated
     * @return {any}
     * @function reduce
     * @example
     * reduce(&(accumulated + current), [1, 2, 3]) //returns 6
     * @example
     * reduce(&(accumulated - current), [3, 3, 3]) //returns -9
     * @example
     * reduce(&if(accumulated == `null`, current, accumulated * current), [3, 3, 3]) //returns 27
     * @category jmespath
     */
    reduce: {
      _func: resolvedArgs => {
        const exprefNode = resolvedArgs[0];
        return resolvedArgs[1].reduce((accumulated, current, index, array) => runtime.interpreter.visit(exprefNode, {
          accumulated,
          current,
          index,
          array
        }), resolvedArgs.length === 3 ? resolvedArgs[2] : null);
      },
      _signature: [{
        types: [TYPE_EXPREF]
      }, {
        types: [TYPE_ARRAY]
      }, {
        types: [TYPE_ANY],
        optional: true
      }]
    },
    /**
     * Register a function to allow code re-use.  The registered function may take one parameter.
     * If more parameters are needed, combine them in an array or map.
     * @param {string} functionName Name of the function to register
     * @param {expression} expr Expression to execute with this function call
     * @return {{}} returns an empty object
     * @function register
     * @example
     * register('product', &@[0] * @[1]) // can now call: product([2,21]) => returns 42
     * @category jmespath
     */
    register: {
      _func: resolvedArgs => {
        const functionName = resolvedArgs[0];
        const exprefNode = resolvedArgs[1];
        if (functionMap[functionName]) {
          debug.push(`Cannot re-register '${functionName}'`);
          return {};
        }
        functionMap[functionName] = {
          _func: args => runtime.interpreter.visit(exprefNode, ...args),
          _signature: [{
            types: [TYPE_ANY],
            optional: true
          }]
        };
        return {};
      },
      _signature: [{
        types: [TYPE_STRING]
      }, {
        types: [TYPE_EXPREF]
      }]
    },
    /**
     * Reverses the order of the `argument`.
     * @param {string|array} argument
     * @return {array}
     * @function reverse
     * @example
     * reverse(['a', 'b', 'c']) //returns ['c', 'b', 'a']
     * @category jmespath
     */
    reverse: {
      _func: resolvedArgs => {
        const originalStr = valueOf(resolvedArgs[0]);
        const typeName = getTypeName(originalStr);
        if (typeName === TYPE_STRING) {
          let reversedStr = '';
          for (let i = originalStr.length - 1; i >= 0; i -= 1) {
            reversedStr += originalStr[i];
          }
          return reversedStr;
        }
        const reversedArray = resolvedArgs[0].slice(0);
        reversedArray.reverse();
        return reversedArray;
      },
      _signature: [{
        types: [TYPE_STRING, TYPE_ARRAY]
      }]
    },
    /**
     * This function accepts an array `list` argument and returns the sorted elements of
     * the `list` as an array. The array must be a list of strings or numbers.
     * Sorting strings is based on code points. Locale is not taken into account.
     * @param {number[]|string[]} list
     * @return {number[]|string[]}
     * @function sort
     * @example
     * sort([1, 2, 4, 3, 1]) // returns [1, 1, 2, 3, 4]
     * @category jmespath
     */
    sort: {
      _func: resolvedArgs => {
        const sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length > 0) {
          const normalize = getTypeName(resolvedArgs[0][0]) === TYPE_NUMBER ? toNumber : toString;
          sortedArray.sort((a, b) => {
            const va = normalize(a);
            const vb = normalize(b);
            if (va < vb) return -1;
            if (va > vb) return 1;
            return 0;
          });
        }
        return sortedArray;
      },
      _signature: [{
        types: [TYPE_ARRAY, TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]
      }]
    },
    /**
     * Sort an array using an expression `expr` as the sort key. For each element
     * in the array of elements, the `expr` expression is applied and the resulting
     * value is used as the key used when sorting the elements. If the result of
     * evaluating the `expr` against the current array element results in type
     * other than a number or a string, a type error will occur.
     * @param {array} elements
     * @param {expression} expr
     * @return {array}
     * @function sortBy
     * @example
     * sortBy(['abcd', 'e', 'def'], &length(@)) //returns ['e', 'def', 'abcd']
     * @example
     * // returns [{year: 1910}, {year: 2010}, {year: 2020}]
     * sortBy([{year: 2010}, {year: 2020}, {year: 1910}], &year)
     * @category jmespath
     */
    sortBy: {
      _func: resolvedArgs => {
        const sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length === 0) {
          return sortedArray;
        }
        const exprefNode = resolvedArgs[1];
        const requiredType = getTypeName(runtime.interpreter.visit(exprefNode, sortedArray[0]));
        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
          throw new Error('TypeError');
        }
        // In order to get a stable sort out of an unstable
        // sort algorithm, we decorate/sort/undecorate (DSU)
        // by creating a new list of [index, element] pairs.
        // In the cmp function, if the evaluated elements are
        // equal, then the index will be used as the tiebreaker.
        // After the decorated list has been sorted, it will be
        // undecorated to extract the original elements.
        const decorated = [];
        for (let i = 0; i < sortedArray.length; i += 1) {
          decorated.push([i, sortedArray[i]]);
        }
        decorated.sort((a, b) => {
          const exprA = runtime.interpreter.visit(exprefNode, a[1]);
          const exprB = runtime.interpreter.visit(exprefNode, b[1]);
          if (getTypeName(exprA) !== requiredType) {
            throw new Error(`TypeError: expected ${requiredType}, received ${getTypeName(exprA)}`);
          } else if (getTypeName(exprB) !== requiredType) {
            throw new Error(`TypeError: expected ${requiredType}, received ${getTypeName(exprB)}`);
          }
          if (exprA > exprB) {
            return 1;
          }
          if (exprA < exprB) {
            return -1;
          }
          // If they're equal compare the items by their
          // order to maintain relative order of equal keys
          // (i.e. to get a stable sort).
          return a[0] - b[0];
        });
        // Undecorate: extract out the original list elements.
        for (let j = 0; j < decorated.length; j += 1) {
          [, sortedArray[j]] = decorated[j];
        }
        return sortedArray;
      },
      _signature: [{
        types: [TYPE_ARRAY]
      }, {
        types: [TYPE_EXPREF]
      }]
    },
    /**
     * Returns true if the `subject` starts with the `prefix`, otherwise returns false.
     * @param {string} subject subject in which the `prefix` is being searched for
     * @param {string} prefix prefix to search in the subject
     * @return {boolean}
     * @function startsWith
     * @example
     * startsWith('jack is at home', 'jack') // returns true
     * @category jmespath
     */
    startsWith: {
      _func: resolvedArgs => valueOf(resolvedArgs[0]).startsWith(valueOf(resolvedArgs[1])),
      _signature: [{
        types: [TYPE_STRING]
      }, {
        types: [TYPE_STRING]
      }]
    },
    /**
     * Returns the sum of the provided `collection` array argument.
     * An empty array will produce a return value of 0.
     * @param {number[]} collection array whose element's sum has to be computed
     * @return {number}
     * @function sum
     * @example
     * sum([1, 2, 3]) //returns 6
     * @category jmespath
     */
    sum: {
      _func: resolvedArgs => {
        let sum = 0;
        resolvedArgs[0].forEach(arg => {
          sum += arg * 1;
        });
        return sum;
      },
      _signature: [{
        types: [TYPE_ARRAY_NUMBER]
      }]
    },
    /**
     * converts the passed `arg` to an array. The conversion happens as per the following rules
     * * array - Returns the passed in value.
     * * number/string/object/boolean - Returns a one element array containing the argument.
     * @param {any} arg
     * @return {array}
     * @function toArray
     * @example
     * toArray(1) // returns [1]
     * @example
     * toArray(null()) // returns [`null`]
     * @category jmespath
     */
    toArray: {
      _func: resolvedArgs => {
        if (getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
          return resolvedArgs[0];
        }
        return [resolvedArgs[0]];
      },
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * converts the passed arg to a number. The conversion happens as per the following rules
     * * string - Returns the parsed number.
     * * number - Returns the passed in value.
     * * array - null
     * * object - null
     * * boolean - null
     * * null - null
     * @param {any} arg
     * @return {number}
     * @function toNumber
     * @example
     * toNumber(1) //returns 1
     * @example
     * toNumber('10') //returns 10
     * @example
     * toNumber({a: 1}) //returns null
     * @example
     * toNumber(true()) //returns null
     * @category jmespath
     */
    toNumber: {
      _func: resolvedArgs => {
        const typeName = getTypeName(resolvedArgs[0]);
        if (typeName === TYPE_NUMBER) {
          return resolvedArgs[0];
        }
        if (typeName === TYPE_STRING) {
          return toNumber(resolvedArgs[0]);
        }
        return null;
      },
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * converts the passed `arg` to a string. The conversion happens as per the following rules
     * * string - Returns the passed in value.
     * * number/array/object/boolean - The JSON encoded value of the object.
     * @param {any} arg
     * @return {string}
     * @function toString
     * @example
     * toString(1) //returns '1'
     * @example
     * toString(true()) //returns 'true'
     * @category jmespath
     */
    toString: {
      _func: resolvedArgs => {
        if (getTypeName(resolvedArgs[0]) === TYPE_STRING) {
          return resolvedArgs[0];
        }
        return JSON.stringify(resolvedArgs[0]);
      },
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * Returns the JavaScript type of the given `subject` argument as a string value.
     *
     * The return value MUST be one of the following:
     * * number
     * * string
     * * boolean
     * * array
     * * object
     * * null
     * @param {any} subject
     * @return {string}
     *
     * @function type
     * @example
     * type(1) //returns 'number'
     * @example
     * type('') //returns 'string'
     * @category jmespath
     */
    type: {
      _func: resolvedArgs => ({
        [TYPE_NUMBER]: 'number',
        [TYPE_STRING]: 'string',
        [TYPE_ARRAY]: 'array',
        [TYPE_OBJECT]: 'object',
        [TYPE_BOOLEAN]: 'boolean',
        [TYPE_EXPREF]: 'expref',
        [TYPE_NULL]: 'null'
      })[getTypeName(resolvedArgs[0])],
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * Returns the values of the provided object `obj`. Note that because JSON hashes are
     * inherently unordered, the values associated with the provided object obj are
     * inherently unordered.
     * @param {object} obj
     * @return {array}
     * @function values
     * @example
     * values({a : 3, b : 4}) //returns [3, 4]
     * @category jmespath
     */
    values: {
      _func: resolvedArgs => {
        const arg = valueOf(resolvedArgs[0]);
        if (arg === null) return [];
        return Object.values(arg);
      },
      _signature: [{
        types: [TYPE_ANY]
      }]
    },
    /**
     * Returns a convolved (zipped) array containing grouped arrays of values from
     * the array arguments from index 0, 1, 2, etc.
     * This function accepts a variable number of arguments.
     * The length of the returned array is equal to the length of the shortest array.
     * @param {...array} arrays array of arrays to zip together
     * @return {array} An array of arrays with elements zipped together
     * @function zip
     * @example
     * zip([1, 2, 3], [4, 5, 6]) //returns [[1, 4], [2, 5], [3, 6]]
     * @category jmespath
     */
    zip: {
      _func: args => {
        const count = args.reduce((min, current) => Math.min(min, current.length), args[0].length);
        const result = new Array(count);
        for (let i = 0; i < count; i += 1) {
          result[i] = [];
          args.forEach(a => {
            result[i].push(a[i]);
          });
        }
        return result;
      },
      _signature: [{
        types: [TYPE_ARRAY],
        variadic: true
      }]
    }
  };
  return functionMap;
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/jmespath.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/jmespath.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formula; });
/* harmony import */ var _TreeInterpreter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeInterpreter.js */ "./node_modules/@adobe/json-formula/src/jmespath/TreeInterpreter.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parser.js */ "./node_modules/@adobe/json-formula/src/jmespath/Parser.js");
/* harmony import */ var _dataTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataTypes.js */ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js");
/* harmony import */ var _matchType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchType.js */ "./node_modules/@adobe/json-formula/src/jmespath/matchType.js");
/* harmony import */ var _openFormulaFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openFormulaFunctions.js */ "./node_modules/@adobe/json-formula/src/jmespath/openFormulaFunctions.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions.js */ "./node_modules/@adobe/json-formula/src/jmespath/functions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@adobe/json-formula/src/jmespath/utils.js");
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */








// Type constants used to define functions.
const {
  TYPE_CLASS,
  TYPE_ANY
} = _dataTypes_js__WEBPACK_IMPORTED_MODULE_2__["default"];
function getToNumber(stringToNumber) {
  let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return value => {
    const n = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["getValueOf"])(value); // in case it's an object that implements valueOf()
    if (n === null) return null;
    if (n instanceof Array) {
      debug.push('Converted array to zero');
      return 0;
    }
    const type = typeof n;
    if (type === 'number') return n;
    if (type === 'string') return stringToNumber(n, debug);
    if (type === 'boolean') return n ? 1 : 0;
    debug.push('Converted object to zero');
    return 0;
  };
}
function toString(a) {
  if (a === null || a === undefined) return '';
  // don't call a 'toString' method, since we could have a child named 'toString()'
  return a.toString();
}
const defaultStringToNumber = str => {
  const n = +str;
  return Number.isNaN(n) ? 0 : n;
};
function isClass(obj) {
  if (obj === null) return false;
  if (Array.isArray(obj)) return false;
  return obj.constructor.name !== 'Object';
}
function matchClass(arg, expectedList) {
  // checking isClass() generates a dependency -- so call it only if necessary
  return expectedList.includes(TYPE_CLASS) && isClass(arg);
}
class Runtime {
  constructor(debug, toNumber) {
    let customFunctions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.strictDeepEqual = _utils_js__WEBPACK_IMPORTED_MODULE_6__["strictDeepEqual"];
    this.toNumber = toNumber;
    this.functionTable = Object(_functions_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _utils_js__WEBPACK_IMPORTED_MODULE_6__["isObject"], _utils_js__WEBPACK_IMPORTED_MODULE_6__["isArray"], toNumber, _matchType_js__WEBPACK_IMPORTED_MODULE_3__["getTypeName"], _utils_js__WEBPACK_IMPORTED_MODULE_6__["getValueOf"], toString, debug);
    Object.entries(Object(_openFormulaFunctions_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_6__["getValueOf"], toString, toNumber, debug)).forEach(_ref => {
      let [fname, func] = _ref;
      this.functionTable[fname] = func;
    });
    Object.entries(customFunctions).forEach(_ref2 => {
      let [fname, func] = _ref2;
      this.functionTable[fname] = func;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _validateArgs(argName, args, signature, bResolved) {
    // Validating the args requires validating
    // the correct arity and the correct type of each arg.
    // If the last argument is declared as variadic, then we need
    // a minimum number of args to be required.  Otherwise it has to
    // be an exact amount.
    if (signature.length === 0) {
      return;
    }
    let pluralized;
    const argsNeeded = signature.filter(arg => !arg.optional).length;
    if (signature[signature.length - 1].variadic) {
      if (args.length < signature.length) {
        pluralized = signature.length === 1 ? ' argument' : ' arguments';
        throw new Error(`ArgumentError: ${argName}() ` + `takes at least${signature.length}${pluralized} but received ${args.length}`);
      }
    } else if (args.length < argsNeeded || args.length > signature.length) {
      pluralized = signature.length === 1 ? ' argument' : ' arguments';
      throw new Error(`ArgumentError: ${argName}() ` + `takes ${signature.length}${pluralized} but received ${args.length}`);
    }
    // if the arguments are unresolved, there's no point in validating types
    if (!bResolved) return;
    let currentSpec;
    let actualType;
    const limit = Math.min(signature.length, args.length);
    for (let i = 0; i < limit; i += 1) {
      currentSpec = signature[i].types;
      // Try to avoid checks that will introspect the object and generate dependencies
      if (!matchClass(args[i], currentSpec) && !currentSpec.includes(TYPE_ANY)) {
        actualType = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_3__["getTypeNames"])(args[i]);
        // eslint-disable-next-line no-param-reassign
        args[i] = Object(_matchType_js__WEBPACK_IMPORTED_MODULE_3__["matchType"])(actualType, currentSpec, args[i], argName, this.toNumber, toString);
      }
    }
  }
  callFunction(name, resolvedArgs, data, interpreter) {
    let bResolved = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    // this check will weed out 'valueOf', 'toString' etc
    if (!Object.prototype.hasOwnProperty.call(this.functionTable, name)) throw new Error(`Unknown function: ${name}()`);
    const functionEntry = this.functionTable[name];
    this._validateArgs(name, resolvedArgs, functionEntry._signature, bResolved);
    return functionEntry._func.call(this, resolvedArgs, data, interpreter);
  }
}
class Formula {
  constructor(debug, customFunctions, stringToNumberFn) {
    this.debug = debug;
    this.toNumber = getToNumber(stringToNumberFn || defaultStringToNumber, debug);
    this.runtime = new Runtime(debug, this.toNumber, customFunctions);
  }
  compile(stream) {
    let allowedGlobalNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let ast;
    try {
      const parser = new _Parser_js__WEBPACK_IMPORTED_MODULE_1__["default"](allowedGlobalNames);
      ast = parser.parse(stream, this.debug);
    } catch (e) {
      this.debug.push(e.toString());
      throw e;
    }
    return ast;
  }
  search(node, data) {
    let globals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en-US';
    // This needs to be improved.  Both the interpreter and runtime depend on
    // each other.  The runtime needs the interpreter to support exprefs.
    // There's likely a clean way to avoid the cyclic dependency.
    this.runtime.interpreter = new _TreeInterpreter_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.runtime, globals, this.toNumber, toString, this.debug, language);
    try {
      return this.runtime.interpreter.search(node, data);
    } catch (e) {
      this.debug.push(e.message || e.toString());
      throw e;
    }
  }
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/matchType.js":
/*!********************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/matchType.js ***!
  \********************************************************************/
/*! exports provided: getTypeName, getTypeNames, matchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeName", function() { return getTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeNames", function() { return getTypeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchType", function() { return matchType; });
/* harmony import */ var _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTypes.js */ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js");
/* harmony import */ var _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenDefinitions.js */ "./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js");


const {
  TYPE_NUMBER,
  TYPE_ANY,
  TYPE_STRING,
  TYPE_ARRAY,
  TYPE_OBJECT,
  TYPE_BOOLEAN,
  TYPE_EXPREF,
  TYPE_NULL,
  TYPE_ARRAY_NUMBER,
  TYPE_ARRAY_STRING,
  TYPE_CLASS,
  TYPE_ARRAY_ARRAY
} = _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  TOK_EXPREF
} = _tokenDefinitions_js__WEBPACK_IMPORTED_MODULE_1__["default"];
const TYPE_NAME_TABLE = {
  [TYPE_NUMBER]: 'number',
  [TYPE_ANY]: 'any',
  [TYPE_STRING]: 'string',
  [TYPE_ARRAY]: 'array',
  [TYPE_OBJECT]: 'object',
  [TYPE_BOOLEAN]: 'boolean',
  [TYPE_EXPREF]: 'expression',
  [TYPE_NULL]: 'null',
  [TYPE_ARRAY_NUMBER]: 'Array<number>',
  [TYPE_ARRAY_STRING]: 'Array<string>',
  [TYPE_CLASS]: 'class',
  [TYPE_ARRAY_ARRAY]: 'Array<array>'
};
function getTypeName(inputObj) {
  let useValueOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (inputObj === null) return TYPE_NULL;
  let obj = inputObj;
  if (useValueOf) {
    // check for the case where there's a child named 'valueOf' that's not a function
    // if so, then it's an object...
    if (typeof inputObj.valueOf === 'function') obj = inputObj.valueOf.call(inputObj);else return TYPE_OBJECT;
  }
  switch (Object.prototype.toString.call(obj)) {
    case '[object String]':
      return TYPE_STRING;
    case '[object Number]':
      return TYPE_NUMBER;
    case '[object Array]':
      return TYPE_ARRAY;
    case '[object Boolean]':
      return TYPE_BOOLEAN;
    case '[object Null]':
      return TYPE_NULL;
    case '[object Object]':
      // Check if it's an expref.  If it has, it's been
      // tagged with a jmespathType attr of 'Expref';
      if (obj.jmespathType === TOK_EXPREF) {
        return TYPE_EXPREF;
      }
      return TYPE_OBJECT;
    default:
      return TYPE_OBJECT;
  }
}
function getTypeNames(inputObj) {
  // return the types with and without using valueOf
  // needed for the cases where we really need an object passed to a function -- not it's value
  const type1 = getTypeName(inputObj);
  const type2 = getTypeName(inputObj, false);
  return [type1, type2];
}
function matchType(actuals, expectedList, argValue, context, toNumber, toString) {
  const actual = actuals[0];
  if (expectedList.findIndex(type => type === TYPE_ANY || actual === type) !== -1) return argValue;
  // Can't coerce Objects to any other type,
  // and cannot coerce anything to a Class
  let wrongType = false;
  if (actual === TYPE_OBJECT || expectedList.length === 1 && expectedList[0] === TYPE_CLASS) {
    wrongType = true;
  }
  if (actual === TYPE_ARRAY && expectedList.length === 1 && expectedList[0] === TYPE_OBJECT) {
    wrongType = true;
  }
  if (expectedList.includes(TYPE_ARRAY_ARRAY)) {
    if (actual === TYPE_ARRAY) {
      argValue.forEach(a => {
        if (!(a instanceof Array)) wrongType = true;
      });
      if (!wrongType) return argValue;
    }
    wrongType = true;
  }
  if (wrongType) {
    throw new Error(`TypeError: ${context} expected argument to be type ${TYPE_NAME_TABLE[expectedList[0]]} but received type ${TYPE_NAME_TABLE[actual]} instead.`);
  }
  // no exact match in the list of possible types, see if we can coerce an array type
  let expected = -1;
  if (actual === TYPE_ARRAY) {
    if (expectedList.includes(TYPE_ARRAY_STRING) && expectedList.includes(TYPE_ARRAY_NUMBER)) {
      // choose the array type based on the first element
      if (argValue.length > 0 && typeof argValue[0] === 'string') expected = TYPE_ARRAY_STRING;else expected = TYPE_ARRAY_NUMBER;
    }
  }
  if (expected === -1 && [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER, TYPE_ARRAY].includes(actual)) {
    expected = expectedList.find(e => [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER, TYPE_ARRAY].includes(e));
  }
  // no match, just take the first type
  if (expected === -1) [expected] = expectedList;
  if (expected === TYPE_ANY) return argValue;
  if (expected === TYPE_ARRAY_STRING || expected === TYPE_ARRAY_NUMBER || expected === TYPE_ARRAY) {
    if (expected === TYPE_ARRAY) {
      if (actual === TYPE_ARRAY_NUMBER || actual === TYPE_ARRAY_STRING) return argValue;
      return argValue === null ? [] : [argValue];
    }
    // The expected type can either just be array,
    // or it can require a specific subtype (array of numbers).
    const subtype = expected === TYPE_ARRAY_NUMBER ? TYPE_NUMBER : TYPE_STRING;
    if (actual === TYPE_ARRAY) {
      // Otherwise we need to check subtypes.
      // We're going to modify the array, so take a copy
      const returnArray = argValue.slice();
      for (let i = 0; i < returnArray.length; i += 1) {
        const indexType = getTypeNames(returnArray[i]);
        returnArray[i] = matchType(indexType, [subtype], returnArray[i], context, toNumber, toString);
      }
      return returnArray;
    }
    if ([TYPE_NUMBER, TYPE_STRING, TYPE_NULL, TYPE_BOOLEAN].includes(subtype)) {
      return [matchType(actuals, [subtype], argValue, context, toNumber, toString)];
    }
  } else {
    if (expected === TYPE_NUMBER) {
      if ([TYPE_STRING, TYPE_BOOLEAN, TYPE_NULL].includes(actual)) return toNumber(argValue);
      /* TYPE_ARRAY, TYPE_EXPREF, TYPE_OBJECT, TYPE_ARRAY, TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING */
      return 0;
    }
    if (expected === TYPE_STRING) {
      if (actual === TYPE_NULL || actual === TYPE_OBJECT) return '';
      return toString(argValue);
    }
    if (expected === TYPE_BOOLEAN) {
      return !!argValue;
    }
    if (expected === TYPE_OBJECT && actuals[1] === TYPE_OBJECT) {
      return argValue;
    }
  }
  throw new Error(`TypeError: ${context} expected argument to be type ${TYPE_NAME_TABLE[expectedList[0]]} but received type ${TYPE_NAME_TABLE[actual]} instead.`);
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/openFormulaFunctions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/openFormulaFunctions.js ***!
  \*******************************************************************************/
/*! exports provided: adjustTimeZone, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustTimeZone", function() { return adjustTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openFormulaFunctions; });
/* harmony import */ var _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTypes.js */ "./node_modules/@adobe/json-formula/src/jmespath/dataTypes.js");
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


// get the offset in MS, given a date and timezone
// timezone is an IANA name. e.g. 'America/New_York'
function offsetMS(dateObj, timeZone) {
  const tzOffset = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'longOffset'
  }).format(dateObj);
  const offset = /GMT([+\-−])?(\d{1,2}):?(\d{0,2})?/.exec(tzOffset);
  if (!offset) return 0;
  const [sign, hours, minutes] = offset.slice(1);
  const result = ((hours || 0) * 60 + 1 * (minutes || 0)) * 60 * 1000;
  return sign === '-' ? result * -1 : result;
}
function round(num, digits) {
  const precision = 10 ** digits;
  return Math.round(num * precision) / precision;
}
const MS_IN_DAY = 24 * 60 * 60 * 1000;

// If we create a non-UTC date, then we need to adjust from the default JavaScript timezone
// to the default timezone
function adjustTimeZone(dateObj, timeZone) {
  if (dateObj === null) return null;
  let baseDate = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds());
  baseDate += offsetMS(dateObj, timeZone);

  // get the offset for the default JS environment
  // return days since the epoch
  return new Date(baseDate);
}
function openFormulaFunctions(valueOf, toString, toNumber) {
  let debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return {
    /**
     * Returns the logical AND result of all parameters.
     * If the parameters are not boolean they will be cast to boolean as per the following rules
     * * null -> false
     * * number -> false if the number is 0, true otherwise
     * * string -> false if the string is empty, true otherwise. String "false" resolves to true
     * * array -> true
     * * object -> true
     * @param {any} firstOperand logical expression
     * @param {...any} [additionalOperands] any number of additional expressions
     * @returns {boolean} The logical result of applying AND to all parameters
     * @example
     * and(10 > 8, length('foo') < 5) // returns true
     * @example
     * and(`null`, length('foo') < 5) // returns false
     * @function
     * @category openFormula
     */
    and: {
      _func: resolvedArgs => {
        let result = !!valueOf(resolvedArgs[0]);
        resolvedArgs.slice(1).forEach(arg => {
          result = result && !!valueOf(arg);
        });
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY],
        variadic: true
      }]
    },
    /**
     * Returns a lower-case string of the `input` string using locale-specific mappings.
     * e.g. Strings with German lowercase letter 'ß' can be compared to 'ss'
     * @param {string} input string to casefold
     * @returns {string} A new string converted to lower case
     * @function casefold
     * @example
     * casefold('AbC') // returns 'abc'
     * @category JSONFormula
     */
    casefold: {
      _func: (args, _data, interpreter) => {
        const str = toString(args[0]);
        return str.toLocaleUpperCase(interpreter.language).toLocaleLowerCase(interpreter.language);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Return difference between two date values.
     * @param {number} start_date The starting date.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @param {number} end_date The end date -- must be greater or equal to start_date.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @param {string} unit  One of:
     * * `y` the number of whole years between start_date and end_date
     * * `m` the number of whole months between start_date and end_date.
     * * `d` the number of days between start_date and end_date
     * * `md` the number of days between start_date and end_date after subtracting whole months.
     * * `ym` the number of whole months between start_date and end_date
     * after subtracting whole years.
     * * `yd` the number of days between start_date and end_date, assuming start_date
     * and end_date were no more than one year apart
     * @returns {integer} The number of days/months/years difference
     * @function
     * @category openFormula
     * @example
     * datedif(datetime(2001, 1, 1), datetime(2003, 1, 1), 'y') // returns 2
     * @example
     * datedif(datetime(2001, 6, 1), datetime(2003, 8, 15), 'D') // returns 440
     * // 440 days between June 1, 2001, and August 15, 2002 (440)
     * @example
     * datedif(datetime(2001, 6, 1), datetime(2003, 8, 15), 'YD') // returns 440
     * // 75 days between June 1 and August 15, ignoring the years of the dates (75)
     */
    datedif: {
      _func: args => {
        const d1 = toNumber(args[0]);
        const d2 = toNumber(args[1]);
        const unit = toString(args[2]).toLowerCase();
        if (d2 === d1) return 0;
        if (d2 < d1) return null;
        if (unit === 'd') return Math.floor(d2 - d1);
        const date1 = new Date(d1 * MS_IN_DAY);
        const date2 = new Date(d2 * MS_IN_DAY);
        const yearDiff = date2.getFullYear() - date1.getFullYear();
        let monthDiff = date2.getMonth() - date1.getMonth();
        const dayDiff = date2.getDate() - date1.getDate();
        if (unit === 'y') {
          let y = yearDiff;
          if (monthDiff < 0) y -= 1;
          if (monthDiff === 0 && dayDiff < 0) y -= 1;
          return y;
        }
        if (unit === 'm') {
          return yearDiff * 12 + monthDiff + (dayDiff < 0 ? -1 : 0);
        }
        if (unit === 'ym') {
          if (dayDiff < 0) monthDiff -= 1;
          if (monthDiff <= 0 && yearDiff > 0) return 12 + monthDiff;
          return monthDiff;
        }
        if (unit === 'yd') {
          if (dayDiff < 0) monthDiff -= 1;
          if (monthDiff < 0) date2.setFullYear(date1.getFullYear() + 1);else date2.setFullYear(date1.getFullYear());
          return Math.floor((date2.getTime() - date1.getTime()) / MS_IN_DAY);
        }
        throw new TypeError(`Unrecognized unit parameter "${unit}" for datedif()`);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Return a date/time value.
     * @param {integer} year Integer value representing the year.
     * Values from 0 to 99 map to the years 1900 to 1999. All other values are the actual year
     * @param {integer} month Integer value representing the month, beginning with 1 for
     * January to 12 for December.
     * @param {integer} day Integer value representing the day of the month.
     * @param {integer} [hours] Integer value between 0 and 23 representing the hour of the day.
     * Defaults to 0.
     * @param {integer} [minutes] Integer value representing the minute segment of a time.
     * The default is 0 minutes past the hour.
     * @param {integer} [seconds] Integer value representing the second segment of a time.
     * The default is 0 seconds past the minute.
     * @param {integer} [milliseconds] Integer value representing the millisecond segment of a time.
     * The default is 0 milliseconds past the second.
     * @param {string} [timeZoneName] according to IANA time zone names. e.g. "America/Toronto"
     * @returns {number} A date/time value represented by number of seconds since 1 January 1970.
     * @kind function
     * @function
     * @category JSONFormula
     * @example
     * datetime(2010, 10, 10) // returns representation of October 10, 2010
     * @example
     * datetime(2010, 2, 28) // returns representation of February 28, 2010
     */
    datetime: {
      _func: args => {
        const year = toNumber(args[0]);
        const month = toNumber(args[1]);
        const day = toNumber(args[2]);
        const hours = args.length > 3 ? toNumber(args[3]) : 0;
        const minutes = args.length > 4 ? toNumber(args[4]) : 0;
        const seconds = args.length > 5 ? toNumber(args[5]) : 0;
        const ms = args.length > 6 ? toNumber(args[6]) : 0;
        const tz = args.length > 7 ? toString(args[7]) : null;
        // javascript months starts from 0
        let jsDate = new Date(year, month - 1, day, hours, minutes, seconds, ms);
        if (tz) {
          jsDate = adjustTimeZone(jsDate, tz);
        }
        return jsDate.getTime() / MS_IN_DAY;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING],
        optional: true
      }]
    },
    /**
     * Returns the day of a date, represented by a serial number.
     * The day is given as an integer ranging from 1 to 31.
     * @param {number} The date of the day you are trying to find.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @return {number}
     * @function day
     * @category openFormula
     * @example
     * day(datetime(2008,5,23)) //returns 23
     */
    day: {
      _func: args => {
        const date = toNumber(args[0]);
        const jsDate = new Date(date * MS_IN_DAY);
        return jsDate.getDate();
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Searches a nested hierarchy of objects to return an array of elements that match a `name`.
     * The name can be either a key into a map or an array index.
     * This is similar to the JSONPath deep scan operator (..)
     * @param {object} object The starting object or array where we start the search
     * @param {string} name The name (or index position) of the elements to find
     * @returns {any}
     * @function
     * @category JSONFormula
     * @example
     * deepScan({a : {b1 : {c : 2}, b2 : {c : 3}}}, 'c') //returns [2, 3]
     */
    deepScan: {
      _func: resolvedArgs => {
        const [source, n] = resolvedArgs;
        const name = n.toString();
        const items = [];
        if (source === null) return items;
        function scan(node) {
          Object.entries(node).forEach(_ref => {
            let [k, v] = _ref;
            if (k === name) items.push(v);
            if (typeof v === 'object') scan(v);
          });
        }
        scan(source);
        return items;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_OBJECT, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NULL]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * returns an array of a given object's property `[key, value]` pairs.
     * @param {object} obj Object whose `[key, value]` pairs need to be extracted
     * @returns {any[]} an array of [key, value] pairs
     * @function entries
     * @category JSONFormula
     * @example
     * entries({a: 1, b: 2}) //returns [['a', 1], ['b', 2]]
     */
    entries: {
      _func: args => {
        const obj = valueOf(args[0]);
        return Object.entries(obj);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_OBJECT, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_BOOLEAN]
      }]
    },
    /**
     * Returns the serial number of the end of a month, given `startDate` plus `monthAdd` months
     * @param {number} startDate The base date to start from.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @param {integer} monthAdd Number of months to add to start date
     * @return {integer} the number of days in the computed month
     * @function
     * @category openFormula
     * @example
     * eomonth(datetime(2011, 1, 1), 1) //returns datetime(2011, 2, 28)
     * @example
     * eomonth(datetime(2011, 1, 1), -3) //returns datetime(2010, 10, 31)
     */
    eomonth: {
      _func: args => {
        const date = toNumber(args[0]);
        const months = toNumber(args[1]);
        const jsDate = new Date(date * MS_IN_DAY);
        // We can give the constructor a month value > 11 and it will increment the years
        // Since day is 1-based, giving zero will yield the last day of the previous month
        const newDate = new Date(jsDate.getFullYear(), jsDate.getMonth() + months + 1, 0);
        return newDate.getTime() / MS_IN_DAY;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Returns e (the base of natural logarithms) raised to a power x. (i.e. e<sup>x</sup>)
     * @param x {number} A numeric expression representing the power of e.
     * @returns {number} e (the base of natural logarithms) raised to a power x
     * @function exp
     * @category openFormula
     * @example
     * exp(10) //returns e^10
     */
    exp: {
      _func: args => {
        const value = toNumber(args[0]);
        return Math.exp(value);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Return constant boolean false value.
     * Note that expressions may also use the JSON literal false: `` `false` ``
     * @returns {boolean} constant boolean value `false`
     * @function
     * @category openFormula
     */
    false: {
      _func: () => false,
      _signature: []
    },
    /**
     * finds and returns the index of query in text from a start position
     * @param {string} query string to search
     * @param {string} text text in which the query has to be searched
     * @param {number} [start] starting position: defaults to 0
     * @returns {number|null} the index of the query to be searched in the text. If not found
     * returns null
     * @function
     * @category openFormula
     * @example
     * find('m', 'abm') //returns 2
     * @example
     * find('M', 'abMcdM', 3) //returns 2
     * @example
     * find('M', 'ab') //returns `null`
     * @example
     * find('M', 'abMcdM', 2) //returns 2
     */
    find: {
      _func: args => {
        const query = toString(args[0]);
        const text = toString(args[1]);
        const startPos = args.length > 2 ? toNumber(args[2]) : 0;
        const result = text.indexOf(query, startPos);
        if (result === -1) {
          return null;
        }
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * returns an object by transforming a list of key-value `pairs` into an object.
     * @param {any[]} pairs list of key-value pairs to create the object from
     * @returns {object}
     * @category JSONFormula
     * @function fromEntries
     * @example
     * fromEntries([['a', 1], ['b', 2]]) //returns {a: 1, b: 2}
     */
    fromEntries: {
      _func: args => {
        const array = args[0];
        return Object.fromEntries(array);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY_ARRAY]
      }]
    },
    /**
     * Extract the hour (0 through 23) from a time/datetime representation
     * @param {number} The datetime/time for which the hour is to be returned.
     * Dates should be specified using the [datetime]{@link datetime} or [time]{@link time} function
     * @return {number}
     * @function hour
     * @category openFormula
     * @example
     * hour(datetime(2008,5,23,12, 0, 0)) //returns 12
     * hour(time(12, 0, 0)) //returns 12
     */
    hour: {
      _func: args => {
        // grab just the fraction part
        const time = toNumber(args[0]) % 1;
        if (time < 0) {
          return null;
        }
        // Normally we'd round to 15 digits, but since we're also multiplying by 24,
        // a reasonable precision is around 14 digits.

        const hour = round(time * 24, 14);
        return Math.floor(hour % 24);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Return one of two values `result1` or `result2`, depending on the `condition`
     * @returns {boolean} True
     * @param {any} condition logical expression to evaluate
     * @param {any} result1 if logical condition is true
     * @param {any} result2 if logical condition is false
     * @return {any} either result1 or result2
     * @function
     * @category openFormula
     * @example
     * if(true(), 1, 2) // returns 1
     * @example
     * if(false(), 1, 2) // returns 2
     */
    if: {
      _func: (unresolvedArgs, data, interpreter) => {
        const conditionNode = unresolvedArgs[0];
        const leftBranchNode = unresolvedArgs[1];
        const rightBranchNode = unresolvedArgs[2];
        const condition = interpreter.visit(conditionNode, data);
        if (valueOf(condition)) {
          return interpreter.visit(leftBranchNode, data);
        }
        return interpreter.visit(rightBranchNode, data);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY]
      }]
    },
    /**
     * Return a selected number of text characters from the left or
     * in case of array selected number of elements from the start
     * @param {string|array} subject The text/array of characters/elements to extract.
     * @param {number} [elements] number of elements to pick. Defaults to 1
     * @return {string|array}
     * @function left
     * @category openFormula
     * @example
     * left('Sale Price', 4) //returns 'Sale'
     * @example
     * left('Sweden') // returns 'S'
     * @example
     * left([4, 5, 6], 2) // returns [4, 5]
     */
    left: {
      _func: args => {
        const numEntries = args.length > 1 ? toNumber(args[1]) : 1;
        if (numEntries < 0) return null;
        if (args[0] instanceof Array) {
          return args[0].slice(0, numEntries);
        }
        const text = toString(args[0]);
        return text.substr(0, numEntries);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * Converts all the alphabetic characters in a string to lowercase. If the value
     * is not a string it will be converted into string
     * using the default toString method
     * @param {string} input input string
     * @returns {string} the lower case value of the input string
     * @function lower
     * @category openFormula
     * @example
     * lower('E. E. Cummings') //returns e. e. cummings
     */
    lower: {
      _func: args => {
        const value = toString(args[0]);
        return value.toLowerCase();
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Returns extracted text, given an original text, starting position, and length.
     * or in case of array, extracts a subset of the array from start till the length
     * number of elements.
     * Returns null if the `startPos` is greater than the length of the array
     * @param {string|array} subject the text string or array of characters or elements to extract.
     * @param {number} startPos the position of the first character or element to extract.
     * The position starts with 0
     * @param {number} length The number of characters or elements to return from text. If it
     * is greater then the length of `subject` the argument is set to the length of the subject.
     * @return {string|array}
     * @function mid
     * @category openFormula
     * @example
     * mid("Fluid Flow",1,5) //returns 'Fluid'
     * @example
     * mid("Fluid Flow",7,20) //returns 'Flow'
     * @example
     * mid("Fluid Flow",20,5) //returns `null`
     */
    mid: {
      _func: args => {
        const startPos = toNumber(args[1]);
        const numEntries = toNumber(args[2]);
        if (startPos < 0) return null;
        if (args[0] instanceof Array) {
          return args[0].slice(startPos, startPos + numEntries);
        }
        const text = toString(args[0]);
        return text.substr(startPos, numEntries);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Extract the minute (0 through 59) from a time/datetime representation
     * @param {number} The datetime/time for which the minute is to be returned.
     * Dates should be specified using the [datetime]{@link datetime} or [time]{@link time} function
     * @return {number}
     * @function minute
     * @category openFormula
     * @example
     * month(datetime(2008,5,23,12, 10, 0)) //returns 10
     * month(time(12, 10, 0)) //returns 10
     */
    minute: {
      _func: args => {
        const time = toNumber(args[0]) % 1;
        if (time < 0) {
          return null;
        }

        // Normally we'd round to 15 digits, but since we're also multiplying by 1440,
        // a reasonable precision is around 10 digits.
        const minute = Math.round(time * 1440, 10);
        return Math.floor(minute % 60);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Return the remainder when one number is divided by another number.
     * The sign is the same as divisor
     * @param {number} dividend The number for which to find the remainder.
     * @param {number} divisor The number by which to divide number.
     * @return {number} Computes the remainder of `dividend`/`divisor`.
     * @function mod
     * @category openFormula
     * @example
     * mod(3, 2) //returns 1
     * @example
     * mod(-3, 2) //returns 1
     */
    mod: {
      _func: args => {
        const p1 = toNumber(args[0]);
        const p2 = toNumber(args[1]);
        return p1 % p2;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Returns the month of a date represented by a serial number.
     * The month is given as an integer, ranging from 1 (January) to 12 (December).
     * @param {number} The date for which the month is to be returned.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @return {number}
     * @function month
     * @category openFormula
     * @example
     * month(datetime(2008,5,23)) //returns 5
     */
    month: {
      _func: args => {
        const date = toNumber(args[0]);
        const jsDate = new Date(date * MS_IN_DAY);
        // javascript months start from 0ß
        return jsDate.getMonth() + 1;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Compute logical NOT of a `value`. If the parameter is not boolean it will be cast to boolean
     * as per the following rules
     * * null -> false
     * * number -> false if the number is 0, true otherwise
     * * string -> false if the string is empty, true otherwise. String "false" resolves to true
     * * array -> true
     * * object -> true
     * Note that it is also possible to use the logical and operator: `A && B`
     * @param {any} value - any data type
     * @returns {boolean} The logical NOT applied to the input parameter
     * @example
     * not(length('bar') > 0) // returns false
     * @example
     * not(false()) // returns true
     * @example
     * not('abcd') // returns false
     * @example
     * not('') // returns true
     * @function
     * @category openFormula
     */
    not: {
      _func: resolveArgs => !valueOf(resolveArgs[0]),
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY]
      }]
    },
    /**
     * returns the time since epoch with days as exponent and time of day as fraction
     * @return {number} representation of current time as a number
     * @function now
     * @category openFormula
     */
    now: {
      _func: () => Date.now() / MS_IN_DAY,
      _signature: []
    },
    /**
     * Return constant null value.
     * Note that expressions may also use the JSON literal null: `` `null` ``
     * @returns {boolean} True
     * @function
     * @category JSONFormula
     */
    null: {
      _func: () => null,
      _signature: []
    },
    /**
     * Returns the logical OR result of two parameters.
     * If the parameters are not boolean they will be cast to boolean as per the following rules
     * * null -> false
     * * number -> false if the number is 0, true otherwise
     * * string -> false if the string is empty, true otherwise. String "false" resolves to true
     * * array -> true
     * * object -> true
     * @param {any} first logical expression
     * @param {...any} [operand] any number of additional expressions
     * @returns {boolean} The logical result of applying OR to all parameters
     * @example
     * or((x / 2) == y, (y * 2) == x)
     * // true
     * @function
     * @category openFormula
     */
    or: {
      _func: resolvedArgs => {
        let result = !!valueOf(resolvedArgs[0]);
        resolvedArgs.slice(1).forEach(arg => {
          result = result || !!valueOf(arg);
        });
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ANY],
        variadic: true
      }]
    },
    /**
     * Computes `a` raised to a power `x`. (a<sup>x</sup>)
     * @param {number} a The base number. It can be any real number.
     * @param {number} x The exponent to which the base number is raised.
     * @return {number}
     * @function power
     * @category openFormula
     * @example
     * power(10, 2) //returns 100 (10 raised to power 2)
     */
    power: {
      _func: args => {
        const base = toNumber(args[0]);
        const power = toNumber(args[1]);
        return base ** power;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Return the input string with the first letter of each word converted to an
     * uppercase letter and the rest of the letters in the word converted to lowercase.
     * @param {string} text the text to partially capitalize.
     * @returns {string}
     * @function proper
     * @category openFormula
     * @example
     * proper('this is a TITLE') //returns 'This Is A Title'
     * @example
     * proper('2-way street') //returns '2-Way Street'
     * @example
     * proper('76BudGet') //returns '76Budget'
     */
    proper: {
      _func: args => {
        const text = toString(args[0]);
        const words = text.split(' ');
        const properWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return properWords.join(' ');
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Returns text where an old text is substituted at a given start position and
     * length, with a new text.
     * @param {string} text original text
     * @param {number} start index in the original text from where to begin the replacement.
     * @param {number} length number of characters to be replaced
     * @param {string} replacement string to replace at the start index
     * @returns {string}
     * @function replace
     * @category openFormula
     * @example
     * replace('abcdefghijk', 6, 5, '*') //returns abcde*k
     * @example
     * replace('2009',3,2,'10') //returns  2010
     * @example
     * replace('123456',1,3,'@') //returns @456
     */
    replace: {
      _func: args => {
        const oldText = toString(args[0]);
        const startNum = toNumber(args[1]);
        const numChars = toNumber(args[2]);
        const newText = toString(args[3]);
        if (startNum < 0) {
          return null;
        }
        const lhs = oldText.substr(0, startNum);
        const rhs = oldText.substr(startNum + numChars);
        return lhs + newText + rhs;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Return text repeated Count times.
     * @param {string} text text to repeat
     * @param {number} count number of times to repeat the text
     * @returns {string}
     * @function rept
     * @category openFormula
     * @example
     * rept('x', 5) //returns 'xxxxx'
     */
    rept: {
      _func: args => {
        const text = toString(args[0]);
        const count = toNumber(args[1]);
        if (count < 0) {
          return null;
        }
        return text.repeat(count);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Return a selected number of text characters from the right of a `subject` or
     * in case of array selected number of elements from the end of `subject` array
     * Returns null if the number of elements is less than 0
     * @param {string|array} subject The text/array containing the characters/elements to extract.
     * @param {number} [elements] number of elements to pick. Defaults to 1
     * @return {string|array}
     * @function right
     * @category openFormula
     * @example
     * right('Sale Price', 4) //returns 'rice'
     * @example
     * left('Sweden') // returns 'n'
     * @example
     * left([4, 5, 6], 2) // returns [5, 6]
     */
    right: {
      _func: args => {
        const numEntries = args.length > 1 ? toNumber(args[1]) : 1;
        if (numEntries < 0) return null;
        if (args[0] instanceof Array) {
          if (numEntries === 0) return [];
          return args[0].slice(numEntries * -1);
        }
        const text = toString(args[0]);
        const start = text.length - numEntries;
        return text.substr(start, numEntries);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * Round a number to a specified `precision`.
     * ### Remarks
     * * If `precision` is greater than zero, round to the specified number of decimal places.
     * * If `precision` is 0, round to the nearest integer.
     * * If `precision` is less than 0, round to the left of the decimal point.
     * @param {number} num number to round off
     * @param {number} precision number is rounded to the specified precision.
     * @returns {number}
     * @function round
     * @category openFormula
     * @example
     * round(2.15, 1) //returns 2.2
     * @example
     * round(626.3,-3) //returns 1000 (Rounds 626.3 to the nearest multiple of 1000)
     * @example
     * round(626.3, 0) //returns 626
     * @example
     * round(1.98,-1) //returns 0 (Rounds 1.98 to the nearest multiple of 10)
     * @example
     * round(-50.55,-2) // -100 (round -50.55 to the nearest multiple of 100)
     */
    round: {
      _func: args => {
        const number = toNumber(args[0]);
        const digits = toNumber(args[1]);
        return round(number, digits);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Perform a wildcard search.  The search is case-sensitive and supports two forms of wildcards:
     * "*" finds a a sequence of characters and "?" finds a single character.
     * To use "*" or "?" as text values, precede them with a tilde ("~") character.
     * Note that the wildcard search is not greedy.
     * e.g. search('a*b', 'abb') will return [0, 'ab'] Not [0, 'abb']
     * @param {string} findText the search string -- which may include wild cards.
     * @param {string} withinText The string to search.
     * @param {integer} startPos The zero-based position of withinText to start searching.
     * Defaults to zero.
     * @returns {array} returns an array with two values:
     * The start position of the found text and the text string that was found.
     * If a match was not found, an empty array is returned.
     * @function search
     * @category openFormula
     * @example
     * search('a?c', 'acabc') //returns [2, 'abc']
     */
    search: {
      _func: args => {
        const findText = toString(args[0]);
        const withinText = toString(args[1]);
        const startPos = toNumber(args[2]);
        if (findText === null || withinText === null || withinText.length === 0) return [];
        // escape all characters that would otherwise create a regular expression
        const reString = findText.replace(/([[.\\^$()+{])/g, '\\$1')
        // add the single character wildcard
        .replace(/~?\?/g, match => match === '~?' ? '\\?' : '.')
        // add the multi-character wildcard
        .replace(/~?\*/g, match => match === '~*' ? '\\*' : '.*?')
        // get rid of the escape characters
        .replace(/~~/g, '~');
        const re = new RegExp(reString);
        const result = withinText.substring(startPos).match(re);
        if (result === null) return [];
        return [result.index + startPos, result[0]];
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * Extract the second (0 through 59) from a time/datetime representation
     * @param {number} The datetime/time for which the second is to be returned.
     * Dates should be specified using the [datetime]{@link datetime} or [time]{@link time} function
     * @return {number}
     * @function second
     * @category openFormula
     * @example
     * second(datetime(2008,5,23,12, 10, 53)) //returns 53
     * second(time(12, 10, 53)) //returns 53
     */
    second: {
      _func: args => {
        const time = toNumber(args[0]) % 1;
        if (time < 0) {
          return null;
        }

        // Normally we'd round to 15 digits, but since we're also multiplying by 86400,
        // a reasonable precision is around 10 digits.
        const seconds = round(time * 86400, 10);
        return Math.floor(seconds % 60);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * split a string into an array, given a separator
     * @param {string} string string to split
     * @param {string} separator separator where the split should occur
     * @return {string[]}
     * @function split
     * @category openFormula
     * @example
     * split('abcdef', '') //returns ['a', 'b', 'c', 'd', 'e', 'f']
     * @example
     * split('abcdef', 'e') //returns ['abcd', 'f']
     */
    split: {
      _func: args => {
        const str = toString(args[0]);
        const separator = toString(args[1]);
        return str.split(separator);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Return the square root of a number
     * @param {number} num number whose square root has to be calculated
     * @return {number}
     * @function sqrt
     * @category openFormula
     * @example
     * sqrt(4) //returns 2
     */
    sqrt: {
      _func: args => {
        const result = Math.sqrt(toNumber(args[0]));
        if (Number.isNaN(result)) {
          return null;
        }
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Estimates standard deviation based on a sample.
     * `stdev` assumes that its arguments are a sample of the entire population.
     * If your data represents a entire population,
     * then compute the standard deviation using [stdevp]{@link stdevp}.
     * @param {number[]} numbers The array of numbers comprising the population
     * @returns {number}
     * @category openFormula
     * @function stdev
     * @example
     * stdev([1345, 1301, 1368]) //returns 34.044089061098404
     * stdevp([1345, 1301, 1368]) //returns 27.797
     */
    stdev: {
      _func: args => {
        const values = args[0] || [];
        if (values.length <= 1) {
          return null;
        }
        const coercedValues = values.map(value => toNumber(value));
        const mean = coercedValues.reduce((a, b) => a + b, 0) / values.length;
        const sumSquare = coercedValues.reduce((a, b) => a + b * b, 0);
        const result = Math.sqrt((sumSquare - values.length * mean * mean) / (values.length - 1));
        if (Number.isNaN(result)) {
          // this would never happen
          return null;
        }
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY_NUMBER]
      }]
    },
    /**
     * Calculates standard deviation based on the entire population given as arguments.
     * `stdevp` assumes that its arguments are the entire population.
     * If your data represents a sample of the population,
     * then compute the standard deviation using [stdev]{@link stdev}.
     * @param {number[]} numbers The array of numbers comprising the population
     * @returns {number}
     * @category openFormula
     * @function stdevp
     * @example
     * stdevp([1345, 1301, 1368]) //returns 27.797
     * stdev([1345, 1301, 1368]) //returns 34.044
     */
    stdevp: {
      _func: args => {
        const values = args[0] || [];
        if (values.length === 0) {
          return null;
        }
        const coercedValues = values.map(value => toNumber(value));
        const mean = coercedValues.reduce((a, b) => a + b, 0) / values.length;
        const meanSumSquare = coercedValues.reduce((a, b) => a + b * b, 0) / values.length;
        const result = Math.sqrt(meanSumSquare - mean * mean);
        if (Number.isNaN(result)) {
          // this would never happen
          return null;
        }
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY_NUMBER]
      }]
    },
    /**
     * Returns input `text`, with text `old` replaced by text `new` (when searching from the left).
     * If `which` parameter is omitted, every occurrence of `old` is replaced with `new`;
     * If `which` is provided, only that occurrence of `old` is replaced by `new`
     * (starting the count from 1).
     * If there is no match, or if `old` has length 0, `text` is returned unchanged.
     * Note that `old` and `new` may have different lengths. If `which` < 1, return `text` unchanged
     * @param {string} text The text for which to substitute characters.
     * @param {string} old The text to replace.
     * @param {string} new The text to replace `old` with.
     * @param {integer} [which] The one-based occurrence of `old` text to replace with `new` text.
     * @returns {string} replaced string
     * @function
     * @category openFormula
     * @example
     * substitute('Sales Data', 'Sales', 'Cost') //returns 'Cost Data'
     * @example
     * substitute('Quarter 1, 2008', '1', '2', 1) //returns 'Quarter 2, 2008'
     * @example
     * substitute('Quarter 1, 1008', '1', '2', 2) //returns 'Quarter 1, 2008'
     */
    substitute: {
      _func: args => {
        const src = toString(args[0]);
        const old = toString(args[1]);
        const replacement = toString(args[2]);
        // no third parameter? replace all instances
        if (args.length <= 3) return src.replaceAll(old, replacement);
        const whch = toNumber(args[3]);
        if (whch < 1) return src;
        // find the instance to replace
        let pos = -1;
        for (let i = 0; i < whch; i += 1) {
          pos += 1;
          const nextFind = src.slice(pos).indexOf(old);
          // no instance to match 'Which'
          if (nextFind === -1) return src;
          pos += nextFind;
        }
        return src.slice(0, pos) + src.slice(pos).replace(old, replacement);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * Construct and returns time from hours, minutes, and seconds.
     * @param {integer} hours Integer value between 0 and 23 representing the hour of the day.
     * Defaults to 0.
     * @param {integer} minutes Integer value representing the minute segment of a time.
     * The default is 0 minutes past the hour.
     * @param {integer} seconds Integer value representing the second segment of a time.
     * The default is 0 seconds past the minute.
     * @return {number} Returns the fraction of the day consumed by the given time
     * @function time
     * @category openFormula
     * @example
     * time(12, 0, 0) //returns 0.5 (half day)
     */
    time: {
      _func: args => {
        const hours = toNumber(args[0]);
        const minutes = toNumber(args[1]);
        const seconds = toNumber(args[2]);
        const time = (hours * 3600 + minutes * 60 + seconds) / 86400;
        if (time < 0) {
          return null;
        }
        return time - Math.floor(time);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * returns the number of days since epoch
     * @return number
     * @function today
     * @category openFormula
     */
    today: {
      _func: () => Math.floor(Date.now() / MS_IN_DAY),
      _signature: []
    },
    /**
     * Remove leading and trailing spaces, and replace all internal multiple spaces
     * with a single space.
     * @param {string} text string to trim
     * @return {string} removes all leading and trailing space.
     * Any other sequence of 2 or more spaces is replaced with a single space.
     * @function trim
     * @category openFormula
     * @example
     * trim('   ab    c   ') //returns 'ab c'
     */
    trim: {
      _func: args => {
        const text = toString(args[0]);
        // only removes the space character
        // other whitespace characters like \t \n left intact
        return text.split(' ').filter(x => x).join(' ');
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Return constant boolean true value.
     * Note that expressions may also use the JSON literal true: `` `true` ``
     * @returns {boolean} True
     * @function
     * @category openFormula
     */
    true: {
      _func: () => true,
      _signature: []
    },
    /**
     * Truncates a number to an integer by removing the fractional part of the number.
     * @param {number} numA number to truncate
     * @param {number} [numB] A number specifying the precision of the truncation. Default is 0
     * @return {number}
     * @function trunc
     * @category openFormula
     * @example
     * trunc(8.9) //returns 8
     * trunc(-8.9) //returns -8
     * trunc(8.912, 2) //returns 8.91
     */
    trunc: {
      _func: args => {
        const number = toNumber(args[0]);
        const digits = args.length > 1 ? toNumber(args[1]) : 0;
        const method = number >= 0 ? Math.floor : Math.ceil;
        return method(number * 10 ** digits) / 10 ** digits;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * takes an array and returns unique elements within it
     * @param {array} input input array
     * @return {array} array with duplicate elements removed
     * @function unique
     * @category JSONFormula
     * @example
     * unique([1, 2, 3, 4, 1, 1, 2]) //returns [1, 2, 3, 4]
     */
    unique: {
      _func: args => {
        // create an array of values for searching.  That way if the array elements are
        // represented by objects with a valueOf(), then we'll locate them in the valueArray
        const valueArray = args[0].map(a => valueOf(a));
        return args[0].filter((v, index) => valueArray.indexOf(valueOf(v)) === index);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY]
      }]
    },
    /**
     * Converts all the alphabetic characters in a string to uppercase.
     * If the value is not a string it will be converted into string
     * using the default toString method
     * @param {string} input input string
     * @returns {string} the upper case value of the input string
     * @function upper
     * @category openFormula
     * @example
     * upper('abcd') //returns 'ABCD'
     */
    upper: {
      _func: args => {
        const value = toString(args[0]);
        return value.toUpperCase();
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    /**
     * Perform an indexed lookup on a map or array
     * @param {map | array} object on which to perform the lookup
     * @param {string | integer} index: a named child for a map or an integer offset for an array
     * @returns {any} the result of the lookup -- or `null` if not found.
     * @function
     * @category JSONFormula
     * @example
     * value({a: 1, b:2, c:3}, a) //returns 1
     * @example
     * value([1, 2, 3, 4], 2) //returns 3
     */
    value: {
      _func: args => {
        const obj = args[0] || {};
        const index = args[1];
        const result = obj[index];
        if (result === undefined) {
          debug.push(`Failed to find: '${index}'`);
          const available = Object.keys(obj).map(a => `'${a}'`).toString();
          if (available.length) debug.push(`Available fields: ${available}`);
          return null;
        }
        return result;
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_OBJECT, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_ARRAY, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NULL]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING, _dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    /**
     * Extract the day of the week from a date; if text, uses current locale to convert to a date.
     * @param {number} The datetime for which the day of the week is to be returned.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @param {number} [returnType] A number that determines the
     * numeral representation (a number from 0 to 7) of the
     * day of week. Default is 1. Supports the following values
     * * 1 : Sunday (1), Monday (2), ..., Saturday (7)
     * * 2 : Monday (1), Tuesday (2), ..., Sunday(7)
     * * 3 : Monday (0), Tuesday (2), ...., Sunday(6)
     * @returns {number} day of the week
     * @function weekday
     * @category openFormula
     * @example
     * weekday(datetime(2006,5,21)) // 1
     * @example
     * weekday(datetime(2006,5,21), 2) // 7
     * @example
     * weekday(datetime(2006,5,21), 3) // 6
     */
    weekday: {
      _func: args => {
        const date = toNumber(args[0]);
        const type = args.length > 1 ? toNumber(args[1]) : 1;
        const jsDate = new Date(date * MS_IN_DAY);
        const day = jsDate.getDay();
        // day is in range [0-7) with 0 mapping to sunday
        switch (type) {
          case 1:
            // range = [1, 7], sunday = 1
            return day + 1;
          case 2:
            // range = [1, 7] sunday = 7
            return (day + 6) % 7 + 1;
          case 3:
            // range = [0, 6] sunday = 6
            return (day + 6) % 7;
          default:
            return null;
        }
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }, {
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER],
        optional: true
      }]
    },
    /**
     * Returns the year of a date represented by a serial number.
     * @param {number} The date for which the year is to be returned.
     * Dates should be entered by using the [datetime]{@link datetime} function
     * @return {number}
     * @function year
     * @category openFormula
     * @example
     * year(datetime(2008,5,23)) //returns 2008
     */
    year: {
      _func: args => {
        const date = toNumber(args[0]);
        const jsDate = new Date(date * MS_IN_DAY);
        return jsDate.getFullYear();
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    charCode: {
      _func: args => {
        const code = toNumber(args[0]);
        if (!Number.isInteger(code)) {
          return null;
        }
        return String.fromCharCode(code);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NUMBER]
      }]
    },
    codePoint: {
      _func: args => {
        const text = toString(args[0]);
        if (text.length === 0) {
          return null;
        }
        return text.codePointAt(0);
      },
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    encodeUrlComponent: {
      _func: args => encodeURIComponent(args[0]),
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    encodeUrl: {
      _func: args => encodeURI(args[0]),
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    decodeUrlComponent: {
      _func: args => decodeURIComponent(args[0]),
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    },
    decodeUrl: {
      _func: args => decodeURI(args[0]),
      _signature: [{
        types: [_dataTypes_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_STRING]
      }]
    }
  };
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/tokenDefinitions.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  TOK_EOF: 'EOF',
  TOK_UNQUOTEDIDENTIFIER: 'UnquotedIdentifier',
  TOK_QUOTEDIDENTIFIER: 'QuotedIdentifier',
  TOK_RBRACKET: 'Rbracket',
  TOK_RPAREN: 'Rparen',
  TOK_COMMA: 'Comma',
  TOK_COLON: 'Colon',
  TOK_CONCATENATE: 'Concatenate',
  TOK_RBRACE: 'Rbrace',
  TOK_NUMBER: 'Number',
  TOK_CURRENT: 'Current',
  TOK_GLOBAL: 'Global',
  TOK_FIELD: 'Field',
  TOK_EXPREF: 'Expref',
  TOK_PIPE: 'Pipe',
  TOK_OR: 'Or',
  TOK_AND: 'And',
  TOK_ADD: 'Add',
  TOK_SUBTRACT: 'Subtract',
  TOK_UNARY_MINUS: 'UnaryMinus',
  TOK_MULTIPLY: 'Multiply',
  TOK_POWER: 'Power',
  TOK_UNION: 'Union',
  TOK_DIVIDE: 'Divide',
  TOK_EQ: 'EQ',
  TOK_GT: 'GT',
  TOK_LT: 'LT',
  TOK_GTE: 'GTE',
  TOK_LTE: 'LTE',
  TOK_NE: 'NE',
  TOK_FLATTEN: 'Flatten',
  TOK_STAR: 'Star',
  TOK_FILTER: 'Filter',
  TOK_DOT: 'Dot',
  TOK_NOT: 'Not',
  TOK_LBRACE: 'Lbrace',
  TOK_LBRACKET: 'Lbracket',
  TOK_LPAREN: 'Lparen',
  TOK_LITERAL: 'Literal'
});

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/jmespath/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/jmespath/utils.js ***!
  \****************************************************************/
/*! exports provided: isArray, isObject, getValueOf, strictDeepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueOf", function() { return getValueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strictDeepEqual", function() { return strictDeepEqual; });
function isArray(obj) {
  if (obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
  return false;
}
function isObject(obj) {
  if (obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  return false;
}
function getValueOf(a) {
  if (a === null || a === undefined) return a;
  if (isArray(a)) {
    return a.map(i => getValueOf(i));
  }
  // if we have a child named 'valueOf' then we're an object,
  // and just return the object.
  if (typeof a.valueOf !== 'function') return a;
  return a.valueOf();
}
function strictDeepEqual(lhs, rhs) {
  const first = getValueOf(lhs);
  const second = getValueOf(rhs);
  // Check the scalar case first.
  if (first === second) {
    return true;
  }

  // Check if they are the same type.
  const firstType = Object.prototype.toString.call(first);
  if (firstType !== Object.prototype.toString.call(second)) {
    return false;
  }
  // We know that first and second have the same type so we can just check the
  // first type from now on.
  if (isArray(first) === true) {
    // Short circuit if they're not the same length;
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i += 1) {
      if (strictDeepEqual(first[i], second[i]) === false) {
        return false;
      }
    }
    return true;
  }
  if (isObject(first) === true) {
    // An object is equal if it has the same key/value pairs.
    const keysSeen = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in first) {
      if (hasOwnProperty.call(first, key)) {
        if (strictDeepEqual(first[key], second[key]) === false) {
          return false;
        }
        keysSeen[key] = true;
      }
    }
    // Now check that there aren't any keys in second that weren't
    // in first.
    // eslint-disable-next-line no-restricted-syntax
    for (const key2 in second) {
      if (hasOwnProperty.call(second, key2)) {
        if (keysSeen[key2] !== true) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/@adobe/json-formula/src/json-formula.js":
/*!**************************************************************!*\
  !*** ./node_modules/@adobe/json-formula/src/json-formula.js ***!
  \**************************************************************/
/*! exports provided: default, jsonFormula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonFormula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonFormula", function() { return jsonFormula; });
/* harmony import */ var _jmespath_jmespath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jmespath/jmespath.js */ "./node_modules/@adobe/json-formula/src/jmespath/jmespath.js");
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


/**
 * Returns an instance of JSON JsonFormula Expression that can be executed later on with
 * multiple instances of JSON Data. The instance of the class has a single search
 * function that can be used to evaluate the expression on a json payload. The advantage
 * of using this over {jsonJsonFormula} function is that it can be performant if a single expression
 * has to be used for multiple json data instances.
 */
class JsonFormula {
  /**
   * @param customFunctions {*} custom functions needed by a hosting application.
   * @param stringToNumber {function} A function that converts string values to numbers.
   * Can be used to convert currencies/dates to numbers
   * @param language
   * @param debug {array} will be populated with any errors/warnings
   */
  constructor() {
    let customFunctions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let stringToNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    this.customFunctions = {
      ...customFunctions
    };
    this.stringToNumber = stringToNumber;
    this.debug = debug;
    this.formula = new _jmespath_jmespath_js__WEBPACK_IMPORTED_MODULE_0__["default"](debug, customFunctions, stringToNumber);
  }

  /**
   * Evaluates the JsonFormula on a particular json payload and return the result
   * @param json {object} the json data on which the expression needs to be evaluated
   * @param globals {*} global objects that can be accessed via custom functions.
   * @returns {*} the result of the expression being evaluated
   */
  search(expression, json) {
    let globals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en-US';
    const ast = this.compile(expression, Object.keys(globals));
    return this.run(ast, json, language, globals);
  }

  /**
   * Execute a previously compiled expression against a json object and return the result
   * @param ast {object} The abstract syntax tree returned from compile()
   * @param json {object} the json data on which the expression needs to be evaluated
   * @param globals {*} set of objects available in global scope
   * @returns {*} the result of the expression being evaluated
   */
  run(ast, json, language, globals) {
    return this.formula.search(ast, json, globals, language);
  }

  /*
   * Creates a compiled expression that can be executed later on with some data.
   * @param expression {string} the expression to evaluate
   * @param allowedGlobalNames {string[]} A list of names of the global variables
   * being used in the expression.
   * @param debug {array} will be populated with any errors/warnings
   */
  compile(expression) {
    let allowedGlobalNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    this.debug.length = 0;
    return this.formula.compile(expression, allowedGlobalNames);
  }
}
function jsonFormula(json, globals, expression) {
  let customFunctions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let stringToNumber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let debug = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  let language = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'en-US';
  return new JsonFormula(customFunctions, stringToNumber, debug).search(expression, json, globals, language);
}

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/BaseNode.js":
/*!********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/BaseNode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseNode = exports.exclude = exports.include = exports.dependencyTracked = exports.qualifiedName = exports.target = exports.staticFields = exports.dynamicProps = exports.editableProperties = void 0;
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const DataRefParser_1 = __webpack_require__(/*! ./utils/DataRefParser */ "./node_modules/@aemforms/af-core/lib/utils/DataRefParser.js");
const EmptyDataValue_1 = __importDefault(__webpack_require__(/*! ./data/EmptyDataValue */ "./node_modules/@aemforms/af-core/lib/data/EmptyDataValue.js"));
exports.editableProperties = ['value', 'label', 'description', 'visible', 'enabled', 'readOnly', 'enum', 'enumNames', 'required', 'properties', 'exclusiveMinimum', 'exclusiveMaximum', 'maximum', 'maxItems', 'minimum', 'minItems'];
exports.dynamicProps = [...exports.editableProperties, 'valid', 'index', 'activeChild'];
exports.staticFields = ['plain-text', 'image'];
class ActionImplWithTarget {
  constructor(_action, _target) {
    this._action = _action;
    this._target = _target;
  }
  get type() {
    return this._action.type;
  }
  get payload() {
    return this._action.payload;
  }
  get metadata() {
    return this._action.metadata;
  }
  get target() {
    return this._target;
  }
  get isCustomEvent() {
    return this._action.isCustomEvent;
  }
  get originalAction() {
    return this._action.originalAction;
  }
  toString() {
    return this._action.toString();
  }
}
exports.target = Symbol('target');
exports.qualifiedName = Symbol('qualifiedName');
function dependencyTracked() {
  return function (target, propertyKey, descriptor) {
    const get = descriptor.get;
    if (get != undefined) {
      descriptor.get = function () {
        this.ruleEngine.trackDependency(this);
        return get.call(this);
      };
    }
  };
}
exports.dependencyTracked = dependencyTracked;
const addOnly = includeOrExclude => function () {
  for (var _len = arguments.length, fieldTypes = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    fieldTypes[_key2] = arguments[_key2];
  }
  return (target, propertyKey, descriptor) => {
    const get = descriptor.get;
    if (get != undefined) {
      descriptor.get = function () {
        if (fieldTypes.indexOf(this.fieldType) > -1 === includeOrExclude) {
          return get.call(this);
        }
        return undefined;
      };
    }
    const set = descriptor.set;
    if (set != undefined) {
      descriptor.set = function (value) {
        if (fieldTypes.indexOf(this.fieldType) > -1 === includeOrExclude) {
          set.call(this, value);
        }
      };
    }
  };
};
exports.include = addOnly(true);
exports.exclude = addOnly(false);
class BaseNode {
  constructor(params, _options) {
    this._options = _options;
    this._lang = '';
    this._callbacks = {};
    this._dependents = [];
    this._tokens = [];
    this[exports.qualifiedName] = null;
    this._jsonModel = Object.assign(Object.assign({}, params), {
      id: 'id' in params ? params.id : this.form.getUniqueId()
    });
  }
  get isContainer() {
    return false;
  }
  setupRuleNode() {
    const self = this;
    this._ruleNode = new Proxy(this.ruleNodeReference(), {
      get: (ruleNodeReference, prop) => {
        return self.getFromRule(ruleNodeReference, prop);
      }
    });
  }
  ruleNodeReference() {
    return this;
  }
  getRuleNode() {
    return this._ruleNode;
  }
  getFromRule(ruleNodeReference, prop) {
    if (prop === Symbol.toPrimitive || prop === 'valueOf' && !ruleNodeReference.hasOwnProperty('valueOf')) {
      return this.valueOf;
    } else if (prop === exports.target) {
      return this;
    } else if (typeof prop === 'string') {
      if (prop.startsWith('$')) {
        prop = prop.substr(1);
        if (typeof this[prop] !== 'function') {
          const retValue = this[prop];
          if (retValue instanceof BaseNode) {
            return retValue.getRuleNode();
          } else if (retValue instanceof Array) {
            return retValue.map(r => r instanceof BaseNode ? r.getRuleNode() : r);
          } else {
            return retValue;
          }
        }
      } else {
        if (ruleNodeReference.hasOwnProperty(prop)) {
          return ruleNodeReference[prop];
        } else if (typeof ruleNodeReference[prop] === 'function') {
          return ruleNodeReference[prop];
        }
      }
    }
  }
  get id() {
    return this._jsonModel.id;
  }
  get index() {
    if (this.parent) {
      return this.parent.indexOf(this);
    }
    return 0;
  }
  get parent() {
    return this._options.parent;
  }
  get type() {
    return this._jsonModel.type;
  }
  get repeatable() {
    var _a;
    return (_a = this.parent) === null || _a === void 0 ? void 0 : _a.hasDynamicItems();
  }
  get fieldType() {
    return this._jsonModel.fieldType || 'text-input';
  }
  get ':type'() {
    return this._jsonModel[':type'] || this.fieldType;
  }
  get name() {
    return this._jsonModel.name;
  }
  get description() {
    return this._jsonModel.description;
  }
  set description(d) {
    this._setProperty('description', d);
  }
  get dataRef() {
    return this._jsonModel.dataRef;
  }
  get visible() {
    return this._jsonModel.visible;
  }
  set visible(v) {
    if (v !== this._jsonModel.visible) {
      const changeAction = (0, Events_1.propertyChange)('visible', v, this._jsonModel.visible);
      this._jsonModel.visible = v;
      this.notifyDependents(changeAction);
    }
  }
  get form() {
    return this._options.form;
  }
  get ruleEngine() {
    return this.form.ruleEngine;
  }
  get label() {
    return this._jsonModel.label;
  }
  set label(l) {
    if (l !== this._jsonModel.label) {
      const changeAction = (0, Events_1.propertyChange)('label', l, this._jsonModel.label);
      this._jsonModel = Object.assign(Object.assign({}, this._jsonModel), {
        label: l
      });
      this.notifyDependents(changeAction);
    }
  }
  get uniqueItems() {
    return this._jsonModel.uniqueItems;
  }
  isTransparent() {
    var _a;
    const isNonTransparent = ((_a = this.parent) === null || _a === void 0 ? void 0 : _a._jsonModel.type) === 'array';
    return !this._jsonModel.name && !isNonTransparent;
  }
  getState() {
    let isRepeatableChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return Object.assign(Object.assign({}, this._jsonModel), {
      properties: this.properties,
      index: this.index,
      parent: undefined,
      qualifiedName: this.qualifiedName,
      events: {},
      rules: {},
      repeatable: this.repeatable === true ? true : undefined,
      ':type': this[':type']
    });
  }
  subscribe(callback) {
    let eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'change';
    this._callbacks[eventName] = this._callbacks[eventName] || [];
    this._callbacks[eventName].push(callback);
    return {
      unsubscribe: () => {
        this._callbacks[eventName] = this._callbacks[eventName].filter(x => x !== callback);
      }
    };
  }
  _addDependent(dependent) {
    if (this._dependents.find(_ref => {
      let {
        node
      } = _ref;
      return node === dependent;
    }) === undefined) {
      const subscription = this.subscribe(change => {
        const changes = change.payload.changes;
        const propsToLook = [...exports.dynamicProps, 'items'];
        const isPropChanged = changes.findIndex(x => {
          return propsToLook.indexOf(x.propertyName) > -1;
        }) > -1;
        if (isPropChanged) {
          dependent.dispatch(new Events_1.ExecuteRule());
        }
      });
      this._dependents.push({
        node: dependent,
        subscription
      });
    }
  }
  removeDependent(dependent) {
    const index = this._dependents.findIndex(_ref2 => {
      let {
        node
      } = _ref2;
      return node === dependent;
    });
    if (index > -1) {
      this._dependents[index].subscription.unsubscribe();
      this._dependents.splice(index, 1);
    }
  }
  queueEvent(action) {
    const actionWithTarget = new ActionImplWithTarget(action, this);
    this.form.getEventQueue().queue(this, actionWithTarget, ['valid', 'invalid'].indexOf(actionWithTarget.type) > -1);
  }
  dispatch(action) {
    this.queueEvent(action);
    this.form.getEventQueue().runPendingQueue();
  }
  notifyDependents(action) {
    const handlers = this._callbacks[action.type] || [];
    handlers.forEach(x => {
      x(new ActionImplWithTarget(action, this));
    });
  }
  isEmpty() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._jsonModel.value;
    return value === undefined || value === null || value === '';
  }
  _setProperty(prop, newValue) {
    let notify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let notifyChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : action => {};
    const oldValue = this._jsonModel[prop];
    let isValueSame = false;
    if (newValue !== null && oldValue !== null && typeof newValue === 'object' && typeof oldValue === 'object') {
      isValueSame = JSON.stringify(newValue) === JSON.stringify(oldValue);
    } else {
      isValueSame = oldValue === newValue;
    }
    if (!isValueSame) {
      this._jsonModel[prop] = newValue;
      const changeAction = (0, Events_1.propertyChange)(prop, newValue, oldValue);
      if (notify) {
        this.notifyDependents(changeAction);
      }
      notifyChildren.call(this, changeAction);
      return changeAction.payload.changes;
    }
    return [];
  }
  _bindToDataModel(contextualDataModel) {
    if (this.id === '$form') {
      this._data = contextualDataModel;
      return;
    }
    const dataRef = this._jsonModel.dataRef;
    let _data,
      _parent = contextualDataModel,
      _key = '';
    if (dataRef === null) {
      _data = EmptyDataValue_1.default;
    } else if (dataRef !== undefined && !this.repeatable) {
      if (this._tokens.length === 0) {
        this._tokens = (0, DataRefParser_1.tokenize)(dataRef);
      }
      let searchData = contextualDataModel;
      if (this._tokens[0].type === DataRefParser_1.TOK_GLOBAL) {
        searchData = this.form.getDataNode();
      } else if (this._tokens[0].type === DataRefParser_1.TOK_REPEATABLE) {
        let repeatRoot = this.parent;
        while (!repeatRoot.repeatable && repeatRoot !== this.form) {
          repeatRoot = repeatRoot.parent;
        }
        searchData = repeatRoot.getDataNode();
      }
      if (typeof searchData !== 'undefined') {
        const name = this._tokens[this._tokens.length - 1].value;
        const create = this.defaultDataModel(name);
        _data = (0, DataRefParser_1.resolveData)(searchData, this._tokens, create);
        _parent = (0, DataRefParser_1.resolveData)(searchData, this._tokens.slice(0, -1));
        _key = name;
      }
    } else {
      if (contextualDataModel !== EmptyDataValue_1.default && exports.staticFields.indexOf(this.fieldType) === -1) {
        _parent = contextualDataModel;
        const name = this._jsonModel.name || '';
        const key = contextualDataModel.$type === 'array' ? this.index : name;
        _key = key;
        if (key !== '') {
          const create = this.defaultDataModel(key);
          if (create !== undefined) {
            _data = contextualDataModel.$getDataNode(key);
            if (_data === undefined) {
              _data = create;
              contextualDataModel.$addDataNode(key, _data);
            }
          }
        } else {
          _data = undefined;
        }
      }
    }
    if (_data) {
      if (!this.isContainer && _parent !== EmptyDataValue_1.default && _data !== EmptyDataValue_1.default) {
        _data = _data === null || _data === void 0 ? void 0 : _data.$convertToDataValue();
        _parent.$addDataNode(_key, _data, true);
      }
      _data === null || _data === void 0 ? void 0 : _data.$bindToField(this);
      this._data = _data;
    }
  }
  getDataNode() {
    return this._data;
  }
  get lang() {
    if (this._jsonModel.lang) {
      this._lang = this._jsonModel.lang;
    }
    if (!this._lang) {
      if (this.parent) {
        this._lang = this.parent.lang;
      } else {
        this._lang = Intl.DateTimeFormat().resolvedOptions().locale;
      }
    }
    return this._lang;
  }
  get properties() {
    return this._jsonModel.properties || {};
  }
  set properties(p) {
    this._setProperty('properties', Object.assign({}, p));
  }
  getNonTransparentParent() {
    let nonTransparentParent = this.parent;
    while (nonTransparentParent != null && nonTransparentParent.isTransparent()) {
      nonTransparentParent = nonTransparentParent.parent;
    }
    return nonTransparentParent;
  }
  _initialize() {
    if (typeof this._data === 'undefined') {
      let dataNode,
        parent = this.parent;
      do {
        dataNode = parent.getDataNode();
        parent = parent.parent;
      } while (dataNode === undefined);
      this._bindToDataModel(dataNode);
    }
  }
  _applyUpdates(propNames, updates) {
    return propNames.reduce((acc, propertyName) => {
      const currentValue = updates[propertyName];
      const changes = this._setProperty(propertyName, currentValue, false);
      if (changes.length > 0) {
        acc[propertyName] = changes[0];
      }
      return acc;
    }, {});
  }
  get qualifiedName() {
    if (this.isTransparent()) {
      return null;
    }
    if (this[exports.qualifiedName] !== null) {
      return this[exports.qualifiedName];
    }
    const parent = this.getNonTransparentParent();
    if (parent && parent.type === 'array') {
      this[exports.qualifiedName] = `${parent.qualifiedName}[${this.index}]`;
    } else {
      this[exports.qualifiedName] = `${parent.qualifiedName}.${this.name}`;
    }
    return this[exports.qualifiedName];
  }
  focus() {
    if (this.parent) {
      this.parent.activeChild = this;
    }
  }
}
__decorate([dependencyTracked()], BaseNode.prototype, "index", null);
__decorate([dependencyTracked()], BaseNode.prototype, "description", null);
__decorate([dependencyTracked()], BaseNode.prototype, "visible", null);
__decorate([dependencyTracked()], BaseNode.prototype, "label", null);
__decorate([dependencyTracked()], BaseNode.prototype, "properties", null);
exports.BaseNode = BaseNode;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Checkbox.js":
/*!********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Checkbox.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
const ValidationUtils_1 = __webpack_require__(/*! ./utils/ValidationUtils */ "./node_modules/@aemforms/af-core/lib/utils/ValidationUtils.js");
const requiredConstraint = offValue => (constraint, value) => {
  const valid = ValidationUtils_1.Constraints.required(constraint, value).valid && (!constraint || value != offValue);
  return {
    valid,
    value
  };
};
class Checkbox extends Field_1.default {
  offValue() {
    const opts = this.enum;
    return opts.length > 1 ? opts[1] : null;
  }
  _getConstraintObject() {
    const baseConstraints = Object.assign({}, super._getConstraintObject());
    baseConstraints.required = requiredConstraint(this.offValue());
    return baseConstraints;
  }
  _getDefaults() {
    return Object.assign(Object.assign({}, super._getDefaults()), {
      enforceEnum: true
    });
  }
  get enum() {
    return this._jsonModel.enum || [];
  }
}
exports.default = Checkbox;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/CheckboxGroup.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/CheckboxGroup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
class CheckboxGroup extends Field_1.default {
  constructor(params, _options) {
    super(params, _options);
  }
  _getFallbackType() {
    const fallbackType = super._getFallbackType();
    if (typeof fallbackType === 'string') {
      return `${fallbackType}[]`;
    } else {
      return 'string[]';
    }
  }
  _getDefaults() {
    return Object.assign(Object.assign({}, super._getDefaults()), {
      enforceEnum: true,
      enum: []
    });
  }
}
exports.default = CheckboxGroup;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const JsonUtils_1 = __webpack_require__(/*! ./utils/JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
const Scriptable_1 = __importDefault(__webpack_require__(/*! ./Scriptable */ "./node_modules/@aemforms/af-core/lib/Scriptable.js"));
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const DataGroup_1 = __importDefault(__webpack_require__(/*! ./data/DataGroup */ "./node_modules/@aemforms/af-core/lib/data/DataGroup.js"));
const BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./node_modules/@aemforms/af-core/lib/BaseNode.js");
class Container extends Scriptable_1.default {
  constructor(json, _options) {
    super(json, {
      form: _options.form,
      parent: _options.parent
    });
    this._children = [];
    this._itemTemplate = null;
    this._activeChild = null;
    this.fieldFactory = _options.fieldFactory;
  }
  ruleNodeReference() {
    return this._childrenReference;
  }
  get items() {
    return this._children;
  }
  get maxItems() {
    return this._jsonModel.maxItems;
  }
  set maxItems(m) {
    this._jsonModel.maxItems = m;
    const minItems = this._jsonModel.minItems || 1;
    const itemsLength = this._children.length;
    const items2Remove = Math.min(itemsLength - m, itemsLength - minItems);
    if (items2Remove > 0) {
      for (let i = 0; i < items2Remove; i++) {
        this.getDataNode().$removeDataNode(m + i);
        this._childrenReference.pop();
      }
      const elems = this._children.splice(m, items2Remove);
      this.notifyDependents((0, Events_1.propertyChange)('items', elems, null));
    }
  }
  get minItems() {
    return this._jsonModel.minItems;
  }
  hasDynamicItems() {
    return this._itemTemplate != null;
  }
  get isContainer() {
    return true;
  }
  isSiteContainer(item) {
    return (':items' in item || 'cqItems' in item) && !('fieldType' in item);
  }
  isAFormField(item) {
    return 'fieldType' in item || 'id' in item || 'name' in item || 'dataRef' in item || 'type' in item;
  }
  getItemsState() {
    let isRepeatableChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this._jsonModel.type === 'array' || (0, JsonUtils_1.isRepeatable)(this._jsonModel) || isRepeatableChild) {
      return this._children.map(x => {
        return Object.assign({}, x.getState(true));
      });
    } else {
      return this._jsonModel.items ? this._jsonModel.items.map(x => {
        if (this.isSiteContainer(x)) {
          return Object.assign(Object.assign({}, x), {
            ':items': this.walkSiteContainerItems(x)
          });
        } else if (this.isAFormField(x)) {
          return Object.assign({}, this.form.getElement(x === null || x === void 0 ? void 0 : x.id).getState(isRepeatableChild));
        } else {
          return x;
        }
      }) : [];
    }
  }
  getState() {
    let isRepeatableChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return Object.assign(Object.assign({}, super.getState(isRepeatableChild)), {
      items: this.getItemsState(isRepeatableChild)
    });
  }
  _createChild(child, options) {
    const {
      parent = this
    } = options;
    return this.fieldFactory.createField(child, {
      form: options.form,
      parent
    });
  }
  walkSiteContainerItems(x) {
    return Object.fromEntries(Object.entries(x[':items']).map(_ref => {
      let [key, value] = _ref;
      if (this.isAFormField(value)) {
        return [key, this.form.getElement(value === null || value === void 0 ? void 0 : value.id).getState()];
      } else if (this.isSiteContainer(value)) {
        return this.walkSiteContainerItems(value);
      } else {
        return [key, value];
      }
    }));
  }
  _addChildToRuleNode(child, options) {
    const self = this;
    const {
      parent = this
    } = options;
    const name = parent.type == 'array' ? parent._children.length + '' : child.name || '';
    if (name.length > 0) {
      Object.defineProperty(parent._childrenReference, name, {
        get: () => {
          if (child.isContainer && child.hasDynamicItems()) {
            self.ruleEngine.trackDependency(child);
          }
          if (self.hasDynamicItems()) {
            self.ruleEngine.trackDependency(self);
            if (this._children[name] !== undefined) {
              return this._children[name].getRuleNode();
            }
          } else {
            return child.getRuleNode();
          }
        },
        configurable: true,
        enumerable: true
      });
    }
  }
  _addChild(itemJson, index) {
    let cloneIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let nonTransparentParent = this;
    while (nonTransparentParent != null && nonTransparentParent.isTransparent()) {
      nonTransparentParent = nonTransparentParent.parent;
    }
    if (typeof index !== 'number' || index > nonTransparentParent._children.length) {
      index = this._children.length;
    }
    const form = this.form;
    const itemTemplate = Object.assign({
      index
    }, (0, JsonUtils_1.deepClone)(itemJson, cloneIds ? () => {
      return form.getUniqueId();
    } : undefined));
    const retVal = this._createChild(itemTemplate, {
      parent: this,
      form: this.form
    });
    itemJson.id = retVal.id;
    this.form.fieldAdded(retVal);
    this._addChildToRuleNode(retVal, {
      parent: nonTransparentParent
    });
    if (index === this._children.length) {
      this._children.push(retVal);
    } else {
      this._children.splice(index, 0, retVal);
    }
    return retVal;
  }
  indexOf(f) {
    return this._children.indexOf(f);
  }
  defaultDataModel(name) {
    const type = this._jsonModel.type || undefined;
    if (type === undefined) {
      return undefined;
    } else {
      const instance = type === 'array' ? [] : {};
      return new DataGroup_1.default(name, instance, type);
    }
  }
  _initialize() {
    super._initialize();
    const items = this._jsonModel.items || [];
    this._childrenReference = this._jsonModel.type == 'array' ? [] : {};
    if (this._jsonModel.type == 'array' && items.length === 1 && this.getDataNode() != null) {
      this._itemTemplate = (0, JsonUtils_1.deepClone)(items[0]);
      if (typeof this._jsonModel.minItems !== 'number') {
        this._jsonModel.minItems = 0;
      }
      if (typeof this._jsonModel.maxItems !== 'number') {
        this._jsonModel.maxItems = -1;
      }
      if (typeof this._jsonModel.initialItems !== 'number') {
        this._jsonModel.initialItems = Math.max(1, this._jsonModel.minItems);
      }
      for (let i = 0; i < this._jsonModel.initialItems; i++) {
        const child = this._addChild(this._itemTemplate, null, i > 0);
        items[0].id = child.id;
        child._initialize();
      }
    } else if (items.length > 0) {
      items.forEach(item => {
        if (this.isSiteContainer(item)) {
          this._initializeSiteContainer(item);
        } else if (this.isAFormField(item)) {
          const child = this._addChild(item);
          child._initialize();
        } else {
          this.form.logger.warn('A container item was not initialized.');
        }
      });
      this._jsonModel.minItems = this._children.length;
      this._jsonModel.maxItems = this._children.length;
      this._jsonModel.initialItems = this._children.length;
    } else {
      this.form.logger.warn('A container exists with no items.');
    }
    this.setupRuleNode();
  }
  _initializeSiteContainer(item) {
    Object.entries(item[':items']).forEach(_ref2 => {
      let [key, value] = _ref2;
      if (this.isAFormField(value)) {
        const child = this._addChild(value);
        child._initialize();
      } else if (this.isSiteContainer(value)) {
        return this._initializeSiteContainer(value);
      }
    });
  }
  addItem(action) {
    if ((action.type === 'addItem' || action.type == 'addInstance') && this._itemTemplate != null) {
      if (this._jsonModel.maxItems === -1 || this._children.length < this._jsonModel.maxItems) {
        const dataNode = this.getDataNode();
        let instanceIndex = action.payload;
        const retVal = this._addChild(this._itemTemplate, action.payload, true);
        if (typeof instanceIndex !== 'number' || instanceIndex > this._children.length) {
          instanceIndex = this._children.length;
        }
        const _data = retVal.defaultDataModel(instanceIndex);
        if (_data) {
          dataNode.$addDataNode(instanceIndex, _data);
        }
        retVal._initialize();
        this.notifyDependents((0, Events_1.propertyChange)('items', retVal.getState(), null));
        retVal.dispatch(new Events_1.Initialize());
        retVal.dispatch(new Events_1.ExecuteRule());
        for (let i = instanceIndex + 1; i < this._children.length; i++) {
          this._children[i].dispatch(new Events_1.ExecuteRule());
        }
      }
    }
  }
  removeItem(action) {
    if ((action.type === 'removeItem' || action.type == 'removeInstance') && this._itemTemplate != null) {
      if (this._children.length == 0) {
        return;
      }
      let instanceIndex = action.payload;
      if (typeof instanceIndex !== 'number') {
        instanceIndex = this._children.length - 1;
      }
      const state = this._children[instanceIndex].getState();
      if (this._children.length > this._jsonModel.minItems) {
        this._childrenReference.pop();
        this._children.splice(instanceIndex, 1);
        this.getDataNode().$removeDataNode(instanceIndex);
        for (let i = instanceIndex; i < this._children.length; i++) {
          this._children[i].dispatch(new Events_1.ExecuteRule());
        }
        this.notifyDependents((0, Events_1.propertyChange)('items', null, state));
      }
    }
  }
  queueEvent(action) {
    var _a;
    super.queueEvent(action);
    if ((_a = action.metadata) === null || _a === void 0 ? void 0 : _a.dispatch) {
      this.items.forEach(x => {
        x.queueEvent(action);
      });
    }
  }
  reset() {
    if (this.type === 'array' || (0, JsonUtils_1.isRepeatable)(this._jsonModel)) {
      if (this.items.length > this._jsonModel.initialItems) {
        const itemsToBeRemoved = this.items.length - this._jsonModel.initialItems;
        for (let i = 0; i < itemsToBeRemoved; i++) {
          this.dispatch(new Events_1.RemoveItem());
        }
      }
    }
    this.items.forEach(x => {
      x.reset();
    });
  }
  validate() {
    return this.items.flatMap(x => {
      return x.validate();
    }).filter(x => x.fieldName !== '');
  }
  dispatch(action) {
    super.dispatch(action);
  }
  importData(contextualDataModel) {
    this._bindToDataModel(contextualDataModel);
    const dataNode = this.getDataNode() || contextualDataModel;
    this.syncDataAndFormModel(dataNode);
  }
  syncDataAndFormModel(contextualDataModel) {
    if ((contextualDataModel === null || contextualDataModel === void 0 ? void 0 : contextualDataModel.$type) === 'array' && this._itemTemplate != null) {
      const dataLength = contextualDataModel === null || contextualDataModel === void 0 ? void 0 : contextualDataModel.$value.length;
      const itemsLength = this._children.length;
      const maxItems = this._jsonModel.maxItems === -1 ? dataLength : this._jsonModel.maxItems;
      const minItems = this._jsonModel.minItems;
      let items2Add = Math.min(dataLength - itemsLength, maxItems - itemsLength);
      const items2Remove = Math.min(itemsLength - dataLength, itemsLength - minItems);
      while (items2Add > 0) {
        items2Add--;
        const child = this._addChild(this._itemTemplate);
        child._initialize();
      }
      if (items2Remove > 0) {
        this._children.splice(dataLength, items2Remove);
        for (let i = 0; i < items2Remove; i++) {
          this._childrenReference.pop();
        }
      }
    }
    this._children.forEach(x => {
      x.importData(contextualDataModel);
    });
  }
  get activeChild() {
    return this._activeChild;
  }
  set activeChild(c) {
    if (c !== this._activeChild) {
      let activeChild = this._activeChild;
      while (activeChild instanceof Container) {
        const temp = activeChild.activeChild;
        activeChild.activeChild = null;
        activeChild = temp;
      }
      const change = (0, Events_1.propertyChange)('activeChild', c, this._activeChild);
      this._activeChild = c;
      if (this.parent && c !== null) {
        this.parent.activeChild = this;
      }
      this._jsonModel.activeChild = c === null || c === void 0 ? void 0 : c.id;
      this.notifyDependents(change);
    }
  }
}
__decorate([(0, BaseNode_1.dependencyTracked)()], Container.prototype, "maxItems", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Container.prototype, "minItems", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Container.prototype, "activeChild", null);
exports.default = Container;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/DateField.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/DateField.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
const af_formatters_1 = __webpack_require__(/*! @aemforms/af-formatters */ "@aemforms/af-formatters");
class DateField extends Field_1.default {
  _applyDefaults() {
    super._applyDefaults();
    const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
    if (!this._jsonModel.editFormat) {
      this._jsonModel.editFormat = 'short';
    }
    if (!this._jsonModel.displayFormat) {
      this._jsonModel.displayFormat = this._jsonModel.editFormat;
    }
    if (!this._jsonModel.placeholder) {
      this._jsonModel.placeholder = (0, af_formatters_1.parseDateSkeleton)(this._jsonModel.editFormat, locale);
    }
    if (!this._jsonModel.description) {
      this._jsonModel.description = `To enter today's date use ${(0, af_formatters_1.formatDate)(new Date(), locale, this._jsonModel.editFormat)}`;
    }
  }
}
exports.default = DateField;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Field.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Field.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/@aemforms/af-core/lib/types/index.js");
const ValidationUtils_1 = __webpack_require__(/*! ./utils/ValidationUtils */ "./node_modules/@aemforms/af-core/lib/utils/ValidationUtils.js");
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const Scriptable_1 = __importDefault(__webpack_require__(/*! ./Scriptable */ "./node_modules/@aemforms/af-core/lib/Scriptable.js"));
const SchemaUtils_1 = __webpack_require__(/*! ./utils/SchemaUtils */ "./node_modules/@aemforms/af-core/lib/utils/SchemaUtils.js");
const DataValue_1 = __importDefault(__webpack_require__(/*! ./data/DataValue */ "./node_modules/@aemforms/af-core/lib/data/DataValue.js"));
const BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./node_modules/@aemforms/af-core/lib/BaseNode.js");
const EmptyDataValue_1 = __importDefault(__webpack_require__(/*! ./data/EmptyDataValue */ "./node_modules/@aemforms/af-core/lib/data/EmptyDataValue.js"));
const af_formatters_1 = __webpack_require__(/*! @aemforms/af-formatters */ "@aemforms/af-formatters");
const validTypes = ['string', 'number', 'boolean', 'file', 'string[]', 'number[]', 'boolean[]', 'file[]', 'array', 'object'];
class Field extends Scriptable_1.default {
  constructor(params, _options) {
    super(params, _options);
    this._ruleNodeReference = [];
    this._applyDefaults();
    this.queueEvent(new Events_1.Initialize());
    this.queueEvent(new Events_1.ExecuteRule());
  }
  _initialize() {
    super._initialize();
    this.setupRuleNode();
  }
  ruleNodeReference() {
    var _a;
    if ((_a = this.type) === null || _a === void 0 ? void 0 : _a.endsWith('[]')) {
      this._ruleNodeReference = [];
    } else {
      this._ruleNodeReference = this;
    }
    return this._ruleNodeReference;
  }
  _getDefaults() {
    return {
      readOnly: false,
      enabled: true,
      visible: true,
      type: this._getFallbackType()
    };
  }
  _getFallbackType() {
    const type = this._jsonModel.type;
    let finalType = type;
    if (typeof type !== 'string' || validTypes.indexOf(type) === -1) {
      const _enum = this.enum;
      finalType = typeof (_enum === null || _enum === void 0 ? void 0 : _enum[0]);
      if (finalType === 'undefined' && typeof this._jsonModel.default !== 'undefined') {
        if (this._jsonModel.default instanceof Array && this._jsonModel.default.length > 0) {
          finalType = `${typeof this._jsonModel.default[0]}[]`;
        } else {
          finalType = typeof this._jsonModel.default;
        }
      }
      if (finalType.indexOf('undefined') === 0) {
        const typeMappings = {
          'text-input': 'string',
          'multiline-input': 'string',
          'number-input': 'number',
          'date-input': 'string',
          'plain-text': 'string',
          'image': 'string',
          'checkbox': 'boolean'
        };
        finalType = typeMappings[this.fieldType];
      }
    }
    return finalType;
  }
  _applyDefaults() {
    Object.entries(this._getDefaults()).map(_ref => {
      let [key, value] = _ref;
      if (this._jsonModel[key] === undefined && value !== undefined) {
        this._jsonModel[key] = value;
      }
    });
    this.coerceParam('required', 'boolean');
    this.coerceParam('readOnly', 'boolean');
    this.coerceParam('enabled', 'boolean');
    const type = this._jsonModel.type;
    if (typeof type !== 'string' || validTypes.indexOf(type) === -1) {
      this._jsonModel.type = this._getFallbackType();
    }
    if (['plain-text', 'image'].indexOf(this.fieldType) === -1) {
      this._jsonModel.value = undefined;
    }
    const value = this._jsonModel.value;
    if (value === undefined) {
      const typedRes = ValidationUtils_1.Constraints.type(this.getInternalType() || 'string', this._jsonModel.default);
      this._jsonModel.value = typedRes.value;
    }
    if (this._jsonModel.type !== 'string') {
      this.unset('emptyValue');
    }
    if (this._jsonModel.fieldType === undefined) {
      this.form.logger.debug('fieldType property is mandatory. Please ensure all the fields have a fieldType');
      if (this._jsonModel.viewType) {
        if (this._jsonModel.viewType.startsWith('custom:')) {
          this.form.logger.error('viewType property has been removed. For custom types, use :type property');
        } else {
          this.form.logger.error('viewType property has been removed. Use fieldType property');
        }
        this._jsonModel.fieldType = this._jsonModel.viewType;
      } else {
        this._jsonModel.fieldType = (0, SchemaUtils_1.defaultFieldTypes)(this._jsonModel);
      }
    }
    if (this._jsonModel.enum === undefined) {
      const type = this._jsonModel.type;
      if (type === 'boolean') {
        this._jsonModel.enum = [true, false];
      }
    } else {
      if (typeof this._jsonModel.enumNames === 'undefined') {
        this._jsonModel.enumNames = this._jsonModel.enum.map(_ => _.toString());
      }
      while (this._jsonModel.enumNames.length < this._jsonModel.enum.length) {
        this._jsonModel.enumNames.push(this._jsonModel.enum[this._jsonModel.enumNames.length].toString());
      }
    }
    const props = ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'];
    if (this._jsonModel.type !== 'string') {
      this.unset('format', 'pattern', 'minLength', 'maxLength');
    } else if (this._jsonModel.fieldType === 'date-input') {
      this._jsonModel.format = 'date';
    }
    this.coerceParam('minLength', 'number');
    this.coerceParam('maxLength', 'number');
    if (this._jsonModel.type !== 'number' && this._jsonModel.format !== 'date') {
      this.unset('step', ...props);
    }
    props.forEach(c => {
      this.coerceParam(c, this._jsonModel.type);
    });
    if (typeof this._jsonModel.step !== 'number') {
      this.coerceParam('step', 'number');
    }
  }
  unset() {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }
    props.forEach(p => this._jsonModel[p] = undefined);
  }
  coerceParam(param, type) {
    const val = this._jsonModel[param];
    if (typeof val !== 'undefined' && typeof val !== type) {
      this.form.logger.info(`${param} is not of type ${type}. Trying to coerce.`);
      try {
        this._jsonModel[param] = (0, ValidationUtils_1.coerceType)(val, type);
      } catch (e) {
        this.form.logger.warn(e);
        this.unset(param);
      }
    }
  }
  get editFormat() {
    return this.withCategory(this._jsonModel.editFormat);
  }
  get displayFormat() {
    return this.withCategory(this._jsonModel.displayFormat);
  }
  get placeholder() {
    return this._jsonModel.placeholder;
  }
  get readOnly() {
    if (this.parent.readOnly !== undefined) {
      return this.parent.readOnly === true ? true : this._jsonModel.readOnly;
    } else {
      return this._jsonModel.readOnly;
    }
  }
  set readOnly(e) {
    this._setProperty('readOnly', e);
  }
  get enabled() {
    if (this.parent.enabled !== undefined) {
      return this.parent.enabled === false ? false : this._jsonModel.enabled;
    } else {
      return this._jsonModel.enabled;
    }
  }
  set enabled(e) {
    this._setProperty('enabled', e);
  }
  get valid() {
    return this._jsonModel.valid;
  }
  get emptyValue() {
    if (this._jsonModel.emptyValue === 'null') {
      return null;
    } else if (this._jsonModel.emptyValue === '' && this.type === 'string') {
      return '';
    } else {
      return undefined;
    }
  }
  get enum() {
    return this._jsonModel.enum;
  }
  set enum(e) {
    this._setProperty('enum', e);
  }
  get enumNames() {
    return this._jsonModel.enumNames;
  }
  set enumNames(e) {
    this._setProperty('enumNames', e);
  }
  get required() {
    return this._jsonModel.required || false;
  }
  set required(r) {
    this._setProperty('required', r);
  }
  get maximum() {
    if (this.type === 'number' || this.format === 'date') {
      return this._jsonModel.maximum;
    }
  }
  set maximum(m) {
    if (this.type === 'number' || this.format === 'date') {
      this._setProperty('maximum', m);
    }
  }
  get minimum() {
    if (this.type === 'number' || this.format === 'date') {
      return this._jsonModel.minimum;
    }
  }
  set minimum(m) {
    if (this.type === 'number' || this.format === 'date') {
      this._setProperty('minimum', m);
    }
  }
  withCategory(df) {
    if (df) {
      const hasCategory = df === null || df === void 0 ? void 0 : df.match(/^(?:date|num)\|/);
      if (hasCategory === null) {
        if (this.format === 'date') {
          df = `date|${df}`;
        } else if (this.type === 'number') {
          df = `num|${df}`;
        }
        return df;
      }
    }
    return df;
  }
  get editValue() {
    const df = this.editFormat;
    if (df && this.isNotEmpty(this.value) && this.valid !== false) {
      try {
        return (0, af_formatters_1.format)(this.value, this.lang, df);
      } catch (e) {
        return this.value;
      }
    } else {
      return this.value;
    }
  }
  get displayValue() {
    const df = this.displayFormat;
    if (df && this.isNotEmpty(this.value) && this.valid !== false) {
      try {
        return (0, af_formatters_1.format)(this.value, this.lang, df);
      } catch (e) {
        return this.value;
      }
    } else {
      return this.value;
    }
  }
  getDataNodeValue(typedValue) {
    return this.isEmpty() ? this.emptyValue : typedValue;
  }
  updateDataNodeAndTypedValue(val) {
    const dataNode = this.getDataNode();
    if (BaseNode_1.staticFields.indexOf(this.fieldType) > -1 && typeof dataNode !== 'undefined') {
      return;
    }
    const Constraints = this._getConstraintObject();
    const typeRes = Constraints.type(this.getInternalType() || 'string', val);
    const changes = this._setProperty('value', typeRes.value, false);
    if (changes.length > 0) {
      this._updateRuleNodeReference(typeRes.value);
      if (typeof dataNode !== 'undefined') {
        dataNode.setValue(this.getDataNodeValue(this._jsonModel.value), this._jsonModel.value, this);
      }
    }
    return changes;
  }
  get value() {
    if (this._jsonModel.value === undefined) {
      return null;
    } else {
      return this._jsonModel.value;
    }
  }
  set value(v) {
    const changes = this.updateDataNodeAndTypedValue(v);
    let uniqueRes = {
      valid: true
    };
    if ((changes === null || changes === void 0 ? void 0 : changes.length) > 0) {
      let updates = {};
      const typeRes = ValidationUtils_1.Constraints.type(this.getInternalType() || 'string', v);
      if (this.parent.uniqueItems && this.parent.type === 'array') {
        uniqueRes = ValidationUtils_1.Constraints.uniqueItems(this.parent.uniqueItems, this.parent.getDataNode().$value);
      }
      if (typeRes.valid && uniqueRes.valid) {
        updates = this.evaluateConstraints();
      } else {
        const changes = {
          'valid': typeRes.valid && uniqueRes.valid,
          'errorMessage': typeRes.valid && uniqueRes.valid ? '' : this.getErrorMessage('type')
        };
        updates = this._applyUpdates(['valid', 'errorMessage'], changes);
      }
      if (updates.valid) {
        this.triggerValidationEvent(updates);
      }
      const changeAction = new Events_1.Change({
        changes: changes.concat(Object.values(updates))
      });
      this.dispatch(changeAction);
    }
  }
  reset() {
    const changes = this.updateDataNodeAndTypedValue(this.default);
    const validationStateChanges = {
      'valid': undefined,
      'errorMessage': ''
    };
    const updates = this._applyUpdates(['valid', 'errorMessage'], validationStateChanges);
    const changeAction = new Events_1.Change({
      changes: changes.concat(Object.values(updates))
    });
    this.dispatch(changeAction);
  }
  _updateRuleNodeReference(value) {
    var _a;
    if ((_a = this.type) === null || _a === void 0 ? void 0 : _a.endsWith('[]')) {
      if (value != null) {
        value.forEach((val, index) => {
          this._ruleNodeReference[index] = val;
        });
        while (value.length !== this._ruleNodeReference.length) {
          this._ruleNodeReference.pop();
        }
      } else {
        while (this._ruleNodeReference.length !== 0) {
          this._ruleNodeReference.pop();
        }
      }
    }
  }
  getInternalType() {
    return this.type;
  }
  valueOf() {
    const obj = this[BaseNode_1.target];
    const actualField = obj === undefined ? this : obj;
    actualField.ruleEngine.trackDependency(actualField);
    return actualField._jsonModel.value || null;
  }
  toString() {
    var _a;
    const obj = this[BaseNode_1.target];
    const actualField = obj === undefined ? this : obj;
    return ((_a = actualField._jsonModel.value) === null || _a === void 0 ? void 0 : _a.toString()) || '';
  }
  getErrorMessage(constraint) {
    var _a;
    return ((_a = this._jsonModel.constraintMessages) === null || _a === void 0 ? void 0 : _a[constraint]) || '';
  }
  get errorMessage() {
    return this._jsonModel.errorMessage;
  }
  get screenReaderText() {
    return this._jsonModel.screenReaderText;
  }
  _getConstraintObject() {
    return ValidationUtils_1.Constraints;
  }
  isArrayType() {
    return this.type ? this.type.indexOf('[]') > -1 : false;
  }
  checkEnum(value, constraints) {
    if (this._jsonModel.enforceEnum === true && value != null) {
      const fn = constraints.enum;
      if (value instanceof Array && this.isArrayType()) {
        return value.every(x => fn(this.enum || [], x).valid);
      } else {
        return fn(this.enum || [], value).valid;
      }
    }
    return true;
  }
  checkStep() {
    var _a, _b;
    const value = this._jsonModel.value;
    const step = this._jsonModel.step;
    if (typeof step === 'number') {
      const prec = ((_b = (_a = step.toString().split('.')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.length) || 0;
      const factor = Math.pow(10, prec);
      const fStep = step * factor;
      const fVal = value * factor;
      const iv = this._jsonModel.minimum || this._jsonModel.default || 0;
      const fIVal = iv * factor;
      const qt = (fVal - fIVal) / fStep;
      const valid = Math.abs(fVal - fIVal) % fStep < .001;
      let next, prev;
      if (!valid) {
        next = (Math.ceil(qt) * fStep + fIVal) / factor;
        prev = (next - fStep) / factor;
      }
      return {
        valid,
        next,
        prev
      };
    }
    return {
      valid: true
    };
  }
  checkValidationExpression() {
    if (typeof this._jsonModel.validationExpression === 'string') {
      return this.executeExpression(this._jsonModel.validationExpression);
    }
    return true;
  }
  getConstraints() {
    switch (this.type) {
      case 'string':
        switch (this.format) {
          case 'date':
            return ValidationUtils_1.ValidConstraints.date;
          case 'binary':
            return ValidationUtils_1.ValidConstraints.file;
          case 'data-url':
            return ValidationUtils_1.ValidConstraints.file;
          default:
            return ValidationUtils_1.ValidConstraints.string;
        }
      case 'file':
        return ValidationUtils_1.ValidConstraints.file;
      case 'number':
      case 'integer':
        return ValidationUtils_1.ValidConstraints.number;
    }
    if (this.isArrayType()) {
      return ValidationUtils_1.ValidConstraints.array;
    }
    return [];
  }
  get format() {
    if (typeof this._jsonModel.format === 'undefined') {
      if (this.type === 'string') {
        switch (this.fieldType) {
          case 'date-input':
            this._jsonModel.format = 'date';
            break;
          case 'file-input':
            this._jsonModel.format = 'data-url';
            break;
        }
      }
    }
    return this._jsonModel.format;
  }
  get enforceEnum() {
    return this._jsonModel.enforceEnum;
  }
  get tooltip() {
    return this._jsonModel.tooltip;
  }
  get maxLength() {
    return this._jsonModel.maxLength;
  }
  get minLength() {
    return this._jsonModel.minLength;
  }
  get pattern() {
    return this._jsonModel.pattern;
  }
  get step() {
    if (this.type === 'number' || this.format === 'date') {
      return this._jsonModel.step;
    }
  }
  get exclusiveMinimum() {
    if (this.type === 'number' || this.format === 'date') {
      return this._jsonModel.exclusiveMinimum;
    }
  }
  set exclusiveMinimum(eM) {
    if (this.type === 'number' || this.format === 'date') {
      this._jsonModel.exclusiveMinimum = eM;
    }
  }
  get exclusiveMaximum() {
    if (this.type === 'number' || this.format === 'date') {
      return this._jsonModel.exclusiveMaximum;
    }
  }
  set exclusiveMaximum(eM) {
    if (this.type === 'number' || this.format === 'date') {
      this._jsonModel.exclusiveMaximum = eM;
    }
  }
  get default() {
    return this._jsonModel.default;
  }
  isNotEmpty(value) {
    return value != null && value !== '';
  }
  evaluateConstraints() {
    let constraint = 'type';
    const elem = this._jsonModel;
    const value = this._jsonModel.value;
    const Constraints = this._getConstraintObject();
    const supportedConstraints = this.getConstraints();
    let valid = true;
    if (valid) {
      valid = Constraints.required(this.required, value).valid && (this.isArrayType() && this.required ? value.length > 0 : true);
      constraint = 'required';
    }
    if (valid && this.isNotEmpty(value)) {
      const invalidConstraint = supportedConstraints.find(key => {
        if (key in elem && elem[key] !== undefined) {
          const restriction = elem[key];
          const fn = Constraints[key];
          if (value instanceof Array && this.isArrayType()) {
            if (ValidationUtils_1.ValidConstraints.array.indexOf(key) !== -1) {
              return !fn(restriction, value).valid;
            } else {
              return value.some(x => !fn(restriction, x).valid);
            }
          } else if (typeof fn === 'function') {
            return !fn(restriction, value).valid;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      if (invalidConstraint != null) {
        valid = false;
        constraint = invalidConstraint;
      } else {
        valid = this.checkEnum(value, Constraints);
        constraint = 'enum';
        if (valid && this.type === 'number') {
          valid = this.checkStep().valid;
          constraint = 'step';
        }
        if (valid) {
          valid = this.checkValidationExpression();
          constraint = 'validationExpression';
        }
      }
    }
    if (!valid) {
      this.form.logger.info(`${constraint} constraint evaluation failed ${this._jsonModel[constraint]}. Received ${this._jsonModel.value}`);
    }
    const changes = {
      'valid': valid,
      'errorMessage': valid ? '' : this.getErrorMessage(constraint)
    };
    return this._applyUpdates(['valid', 'errorMessage'], changes);
  }
  triggerValidationEvent(changes) {
    if (changes.valid) {
      if (this.valid) {
        this.dispatch(new Events_1.Valid());
      } else {
        this.dispatch(new Events_1.Invalid());
      }
    }
  }
  validate() {
    const changes = this.evaluateConstraints();
    if (changes.valid) {
      this.triggerValidationEvent(changes);
      this.notifyDependents(new Events_1.Change({
        changes: Object.values(changes)
      }));
    }
    return this.valid ? [] : [new types_1.ValidationError(this.id, [this._jsonModel.errorMessage])];
  }
  importData(contextualDataModel) {
    this._bindToDataModel(contextualDataModel);
    const dataNode = this.getDataNode();
    if (dataNode !== undefined && dataNode !== EmptyDataValue_1.default && dataNode.$value !== this._jsonModel.value) {
      const changeAction = (0, Events_1.propertyChange)('value', dataNode.$value, this._jsonModel.value);
      this._jsonModel.value = dataNode.$value;
      this.queueEvent(changeAction);
    }
  }
  defaultDataModel(name) {
    const value = BaseNode_1.staticFields.indexOf(this.fieldType) > -1 ? undefined : this.getDataNodeValue(this._jsonModel.value);
    return new DataValue_1.default(name, value, this.type || 'string');
  }
  getState() {
    return Object.assign(Object.assign({}, super.getState()), {
      editFormat: this.editFormat,
      displayFormat: this.displayFormat,
      editValue: this.editValue,
      displayValue: this.displayValue,
      enabled: this.enabled,
      readOnly: this.readOnly
    });
  }
}
__decorate([(0, BaseNode_1.dependencyTracked)(), (0, BaseNode_1.exclude)('button', 'image', 'plain-text')], Field.prototype, "readOnly", null);
__decorate([(0, BaseNode_1.dependencyTracked)(), (0, BaseNode_1.exclude)('image', 'plain-text')], Field.prototype, "enabled", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "valid", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "enum", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "enumNames", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "required", null);
__decorate([(0, BaseNode_1.include)('date-input', 'number-input')], Field.prototype, "editValue", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "value", null);
__decorate([(0, BaseNode_1.include)('text-input', 'date-input', 'file-input')], Field.prototype, "format", null);
__decorate([(0, BaseNode_1.include)('text-input')], Field.prototype, "maxLength", null);
__decorate([(0, BaseNode_1.include)('text-input')], Field.prototype, "minLength", null);
__decorate([(0, BaseNode_1.include)('text-input')], Field.prototype, "pattern", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "exclusiveMinimum", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], Field.prototype, "exclusiveMaximum", null);
exports.default = Field;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Fieldset.js":
/*!********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Fieldset.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;
const Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./node_modules/@aemforms/af-core/lib/Container.js"));
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const defaults = {
  visible: true,
  enabled: true
};
const notifyChildrenAttributes = ['readOnly', 'enabled'];
class Fieldset extends Container_1.default {
  constructor(params, _options) {
    super(params, _options);
    this._applyDefaults();
    this.queueEvent(new Events_1.Initialize());
    this.queueEvent(new Events_1.ExecuteRule());
  }
  _applyDefaults() {
    Object.entries(defaults).map(_ref => {
      let [key, value] = _ref;
      if (this._jsonModel[key] === undefined) {
        this._jsonModel[key] = value;
      }
    });
    if (this._jsonModel.dataRef && this._jsonModel.type === undefined) {
      this._jsonModel.type = 'object';
    }
  }
  get type() {
    const ret = super.type;
    if (ret === 'array' || ret === 'object') {
      return ret;
    }
    return undefined;
  }
  get items() {
    return super.items;
  }
  get value() {
    return null;
  }
  get fieldType() {
    return 'panel';
  }
  get enabled() {
    if (this.parent.enabled !== undefined) {
      return this.parent.enabled === false ? false : this._jsonModel.enabled;
    } else {
      return this._jsonModel.enabled;
    }
  }
  set enabled(e) {
    this._setProperty('enabled', e, true, this.notifyChildren);
  }
  get readOnly() {
    if (this.parent.readOnly !== undefined) {
      return this.parent.readOnly === true ? true : this._jsonModel.readOnly;
    } else {
      return this._jsonModel.readOnly;
    }
  }
  set readOnly(e) {
    this._setProperty('readOnly', e, true, this.notifyChildren);
  }
  notifyChildren(action) {
    if (action.payload !== undefined && action.payload.changes !== undefined) {
      for (const change of action.payload.changes) {
        if (change.propertyName !== undefined && notifyChildrenAttributes.includes(change.propertyName)) {
          this.items.forEach(child => {
            this.notifyDependents.call(child, (0, Events_1.propertyChange)(change.propertyName, child.getState()[change.propertyName], null));
            if (child.fieldType === 'panel') {
              this.notifyChildren.call(child, action);
            }
          });
        }
      }
    }
  }
  getState() {
    return Object.assign(Object.assign({}, super.getState()), {
      enabled: this.enabled,
      readOnly: this.readOnly
    });
  }
}
exports.Fieldset = Fieldset;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/FileObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/FileObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileObject = void 0;
class FileObject {
  constructor(init) {
    this.mediaType = 'application/octet-stream';
    this.name = 'unknown';
    this.size = 0;
    Object.assign(this, init);
  }
  get type() {
    return this.mediaType;
  }
  toJSON() {
    return {
      'name': this.name,
      'size': this.size,
      'mediaType': this.mediaType,
      'data': this.data.toString()
    };
  }
  equals(obj) {
    return this.data === obj.data && this.mediaType === obj.mediaType && this.name === obj.name && this.size === obj.size;
  }
}
exports.FileObject = FileObject;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/FileUpload.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/FileUpload.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
const FormUtils_1 = __webpack_require__(/*! ./utils/FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
const FileObject_1 = __webpack_require__(/*! ./FileObject */ "./node_modules/@aemforms/af-core/lib/FileObject.js");
const ValidationUtils_1 = __webpack_require__(/*! ./utils/ValidationUtils */ "./node_modules/@aemforms/af-core/lib/utils/ValidationUtils.js");
function addNameToDataURL(dataURL, name) {
  return dataURL.replace(';base64', `;name=${encodeURIComponent(name)};base64`);
}
function processFiles(files) {
  return Promise.all([].map.call(files, processFile));
}
function processFile(file) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      name,
      size,
      type
    } = file;
    const fileObj = yield new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        resolve(new FileObject_1.FileObject({
          data: addNameToDataURL(event.target.result, name),
          type,
          name,
          size
        }));
      };
      reader.readAsDataURL(file.data);
    });
    return fileObj;
  });
}
class FileUpload extends Field_1.default {
  _getDefaults() {
    return Object.assign(Object.assign({}, super._getDefaults()), {
      accept: ['audio/*', 'video/*', 'image/*', 'text/*', 'application/pdf'],
      maxFileSize: '2MB'
    });
  }
  _getFallbackType() {
    return 'file';
  }
  get maxFileSize() {
    return (0, FormUtils_1.getFileSizeInBytes)(this._jsonModel.maxFileSize);
  }
  get accept() {
    return this._jsonModel.accept;
  }
  _applyUpdates(propNames, updates) {
    return propNames.reduce((acc, propertyName) => {
      const prevValue = this._jsonModel[propertyName];
      const currentValue = updates[propertyName];
      if (currentValue !== prevValue) {
        acc[propertyName] = {
          propertyName,
          currentValue,
          prevValue
        };
        if (prevValue instanceof FileObject_1.FileObject && typeof currentValue === 'object' && propertyName === 'value') {
          this._jsonModel[propertyName] = new FileObject_1.FileObject(Object.assign(Object.assign({}, prevValue), {
            'data': currentValue.data
          }));
        } else {
          this._jsonModel[propertyName] = currentValue;
        }
      }
      return acc;
    }, {});
  }
  getInternalType() {
    var _a;
    return ((_a = this.type) === null || _a === void 0 ? void 0 : _a.endsWith('[]')) ? 'file[]' : 'file';
  }
  getDataNodeValue(typedValue) {
    var _a;
    let dataNodeValue = typedValue;
    if (dataNodeValue != null) {
      if (this.type === 'string') {
        dataNodeValue = (_a = dataNodeValue.data) === null || _a === void 0 ? void 0 : _a.toString();
      } else if (this.type === 'string[]') {
        dataNodeValue = dataNodeValue instanceof Array ? dataNodeValue : [dataNodeValue];
        dataNodeValue = dataNodeValue.map(_ => {
          var _a;
          return (_a = _ === null || _ === void 0 ? void 0 : _.data) === null || _a === void 0 ? void 0 : _a.toString();
        });
      }
    }
    return dataNodeValue;
  }
  _serialize() {
    return __awaiter(this, void 0, void 0, function* () {
      const val = this._jsonModel.value;
      if (val === undefined) {
        return null;
      }
      const filesInfo = yield processFiles(val instanceof Array ? val : [val]);
      return filesInfo;
    });
  }
  importData(dataModel) {
    this._bindToDataModel(dataModel);
    const dataNode = this.getDataNode();
    if (dataNode !== undefined) {
      const value = dataNode === null || dataNode === void 0 ? void 0 : dataNode.$value;
      if (value != null) {
        const res = ValidationUtils_1.Constraints.type(this.getInternalType(), value);
        if (!res.valid) {
          this.form.logger.debug(`unable to bind ${this.name} to data`);
        }
        this.form.getEventQueue().queue(this, (0, Events_1.propertyChange)('value', res.value, this._jsonModel.value));
        this._jsonModel.value = res.value;
      } else {
        this._jsonModel.value = null;
      }
    }
  }
}
exports.default = FileUpload;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Form.js":
/*!****************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Form.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./node_modules/@aemforms/af-core/lib/Container.js"));
const FormMetaData_1 = __importDefault(__webpack_require__(/*! ./FormMetaData */ "./node_modules/@aemforms/af-core/lib/FormMetaData.js"));
const EventQueue_1 = __importDefault(__webpack_require__(/*! ./controller/EventQueue */ "./node_modules/@aemforms/af-core/lib/controller/EventQueue.js"));
const Logger_1 = __webpack_require__(/*! ./controller/Logger */ "./node_modules/@aemforms/af-core/lib/controller/Logger.js");
const FormUtils_1 = __webpack_require__(/*! ./utils/FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
const DataGroup_1 = __importDefault(__webpack_require__(/*! ./data/DataGroup */ "./node_modules/@aemforms/af-core/lib/data/DataGroup.js"));
const FunctionRuntime_1 = __webpack_require__(/*! ./rules/FunctionRuntime */ "./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js");
const Events_1 = __webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
class Form extends Container_1.default {
  constructor(n, fieldFactory, _ruleEngine) {
    let _eventQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new EventQueue_1.default();
    let logLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'off';
    super(n, {
      fieldFactory: fieldFactory
    });
    this._ruleEngine = _ruleEngine;
    this._eventQueue = _eventQueue;
    this._fields = {};
    this._invalidFields = [];
    this.dataRefRegex = /("[^"]+?"|[^.]+?)(?:\.|$)/g;
    this._logger = new Logger_1.Logger(logLevel);
    this.queueEvent(new Events_1.Initialize());
    this.queueEvent(new Events_1.ExecuteRule());
    this._ids = (0, FormUtils_1.IdGenerator)();
    this._bindToDataModel(new DataGroup_1.default('$form', {}));
    this._initialize();
    this.queueEvent(new Events_1.FormLoad());
  }
  get logger() {
    return this._logger;
  }
  get metaData() {
    const metaData = this._jsonModel.metadata || {};
    return new FormMetaData_1.default(metaData);
  }
  get action() {
    return this._jsonModel.action;
  }
  importData(dataModel) {
    this._bindToDataModel(new DataGroup_1.default('$form', dataModel));
    this.syncDataAndFormModel(this.getDataNode());
    this._eventQueue.runPendingQueue();
  }
  exportData() {
    var _a;
    return (_a = this.getDataNode()) === null || _a === void 0 ? void 0 : _a.$value;
  }
  setFocus(field) {
    const parent = field.parent;
    const currentField = field;
    while (parent != null && parent.activeChild != currentField) {
      parent.activeChild = currentField;
    }
  }
  getState() {
    const self = this;
    const res = super.getState();
    res.id = '$form';
    Object.defineProperty(res, 'data', {
      get: function () {
        return self.exportData();
      }
    });
    Object.defineProperty(res, 'attachments', {
      get: function () {
        return (0, FormUtils_1.getAttachments)(self);
      }
    });
    return res;
  }
  get type() {
    return 'object';
  }
  isTransparent() {
    return false;
  }
  get form() {
    return this;
  }
  get ruleEngine() {
    return this._ruleEngine;
  }
  getUniqueId() {
    if (this._ids == null) {
      return '';
    }
    return this._ids.next().value;
  }
  fieldAdded(field) {
    this._fields[field.id] = field;
    field.subscribe(action => {
      if (this._invalidFields.indexOf(action.target.id) === -1) {
        this._invalidFields.push(action.target.id);
      }
    }, 'invalid');
    field.subscribe(action => {
      const index = this._invalidFields.indexOf(action.target.id);
      if (index > -1) {
        this._invalidFields.splice(index, 1);
      }
    }, 'valid');
    field.subscribe(action => {
      const field = action.target.getState();
      if (field) {
        const fieldChangedAction = new Events_1.FieldChanged(action.payload.changes, field);
        this.dispatch(fieldChangedAction);
      }
    });
  }
  visit(callBack) {
    this.traverseChild(this, callBack);
  }
  traverseChild(container, callBack) {
    container.items.forEach(field => {
      if (field.isContainer) {
        this.traverseChild(field, callBack);
      }
      callBack(field);
    });
  }
  validate() {
    const validationErrors = super.validate();
    this.dispatch(new Events_1.ValidationComplete(validationErrors));
    return validationErrors;
  }
  isValid() {
    return this._invalidFields.length === 0;
  }
  dispatch(action) {
    if (action.type === 'submit') {
      super.queueEvent(action);
      this._eventQueue.runPendingQueue();
    } else {
      super.dispatch(action);
    }
  }
  submit(action, context) {
    if (this.validate().length === 0) {
      const payload = (action === null || action === void 0 ? void 0 : action.payload) || {};
      (0, FunctionRuntime_1.submit)(context, payload === null || payload === void 0 ? void 0 : payload.success, payload === null || payload === void 0 ? void 0 : payload.error, payload === null || payload === void 0 ? void 0 : payload.submit_as, payload === null || payload === void 0 ? void 0 : payload.data);
    }
  }
  reset() {
    super.reset();
    this._invalidFields = [];
  }
  getElement(id) {
    if (id == this.id) {
      return this;
    }
    return this._fields[id];
  }
  get qualifiedName() {
    return '$form';
  }
  getEventQueue() {
    return this._eventQueue;
  }
  get name() {
    return '$form';
  }
  get value() {
    return null;
  }
  get id() {
    return '$form';
  }
  get title() {
    return this._jsonModel.title || '';
  }
}
exports.default = Form;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/FormInstance.js":
/*!************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/FormInstance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFunctions = exports.fetchForm = exports.validateFormData = exports.validateFormInstance = exports.createFormInstance = void 0;
const Form_1 = __importDefault(__webpack_require__(/*! ./Form */ "./node_modules/@aemforms/af-core/lib/Form.js"));
const JsonUtils_1 = __webpack_require__(/*! ./utils/JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
const Fetch_1 = __webpack_require__(/*! ./utils/Fetch */ "./node_modules/@aemforms/af-core/lib/utils/Fetch.js");
const RuleEngine_1 = __importDefault(__webpack_require__(/*! ./rules/RuleEngine */ "./node_modules/@aemforms/af-core/lib/rules/RuleEngine.js"));
const EventQueue_1 = __importDefault(__webpack_require__(/*! ./controller/EventQueue */ "./node_modules/@aemforms/af-core/lib/controller/EventQueue.js"));
const Logger_1 = __webpack_require__(/*! ./controller/Logger */ "./node_modules/@aemforms/af-core/lib/controller/Logger.js");
const FormCreationUtils_1 = __webpack_require__(/*! ./utils/FormCreationUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormCreationUtils.js");
const FunctionRuntime_1 = __webpack_require__(/*! ./rules/FunctionRuntime */ "./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js");
const FormUtils_1 = __webpack_require__(/*! ./utils/FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
const createFormInstance = function (formModel, callback) {
  let logLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'error';
  let fModel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  try {
    let f = fModel;
    if (f == null) {
      formModel = (0, FormUtils_1.sitesModelToFormModel)(formModel);
      f = new Form_1.default(Object.assign({}, formModel), FormCreationUtils_1.FormFieldFactory, new RuleEngine_1.default(), new EventQueue_1.default(new Logger_1.Logger(logLevel)), logLevel);
    }
    const formData = formModel === null || formModel === void 0 ? void 0 : formModel.data;
    if (formData) {
      f.importData(formData);
    }
    if (typeof callback === 'function') {
      callback(f);
    }
    f.getEventQueue().runPendingQueue();
    return f;
  } catch (e) {
    console.error(`Unable to create an instance of the Form ${e}`);
    throw new Error(e);
  }
};
exports.createFormInstance = createFormInstance;
const validateFormInstance = (formModel, data) => {
  try {
    const f = new Form_1.default(Object.assign({}, formModel), FormCreationUtils_1.FormFieldFactory, new RuleEngine_1.default());
    if (data) {
      f.importData(data);
    }
    return f.validate().length === 0;
  } catch (e) {
    throw new Error(e);
  }
};
exports.validateFormInstance = validateFormInstance;
const validateFormData = (formModel, data) => {
  try {
    const f = new Form_1.default(Object.assign({}, formModel), FormCreationUtils_1.FormFieldFactory, new RuleEngine_1.default());
    if (data) {
      f.importData(data);
    }
    const res = f.validate();
    return {
      messages: res,
      valid: res.length === 0
    };
  } catch (e) {
    throw new Error(e);
  }
};
exports.validateFormData = validateFormData;
const fetchForm = function (url) {
  let headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const headerObj = new Headers();
  Object.entries(headers).forEach(_ref => {
    let [key, value] = _ref;
    headerObj.append(key, value);
  });
  return new Promise((resolve, reject) => {
    (0, Fetch_1.request)(`${url}.model.json`, null, {
      headers
    }).then(response => {
      if (response.status !== 200) {
        reject('Not Found');
      } else {
        let formObj = response.body;
        if ('model' in formObj) {
          const {
            model
          } = formObj;
          formObj = model;
        }
        resolve((0, JsonUtils_1.jsonString)(formObj));
      }
    });
  });
};
exports.fetchForm = fetchForm;
const registerFunctions = functions => {
  FunctionRuntime_1.FunctionRuntime.registerFunctions(functions);
};
exports.registerFunctions = registerFunctions;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/FormMetaData.js":
/*!************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/FormMetaData.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const Node_1 = __importDefault(__webpack_require__(/*! ./Node */ "./node_modules/@aemforms/af-core/lib/Node.js"));
class FormMetaData extends Node_1.default {
  get version() {
    return this.getP('version', '');
  }
  get grammar() {
    return this.getP('grammar', '');
  }
}
exports.default = FormMetaData;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/InstanceManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/InstanceManager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstanceManager = void 0;
const Fieldset_1 = __webpack_require__(/*! ./Fieldset */ "./node_modules/@aemforms/af-core/lib/Fieldset.js");
const BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./node_modules/@aemforms/af-core/lib/BaseNode.js");
class InstanceManager extends Fieldset_1.Fieldset {
  get maxOccur() {
    return this._jsonModel.maxItems;
  }
  set maxOccur(m) {
    this.maxItems = m;
  }
  get minOccur() {
    return this.minItems;
  }
  addInstance(action) {
    return this.addItem(action);
  }
  removeInstance(action) {
    return this.removeItem(action);
  }
}
__decorate([(0, BaseNode_1.dependencyTracked)()], InstanceManager.prototype, "maxOccur", null);
__decorate([(0, BaseNode_1.dependencyTracked)()], InstanceManager.prototype, "minOccur", null);
exports.InstanceManager = InstanceManager;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Node.js":
/*!****************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Node.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const JsonUtils_1 = __webpack_require__(/*! ./utils/JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
class Node {
  constructor(inputModel) {
    this._jsonModel = Object.assign({}, inputModel);
  }
  getP(key, def) {
    return (0, JsonUtils_1.getProperty)(this._jsonModel, key, def);
  }
  get isContainer() {
    return false;
  }
}
exports.default = Node;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/Scriptable.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/Scriptable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./node_modules/@aemforms/af-core/lib/BaseNode.js");
class Scriptable extends BaseNode_1.BaseNode {
  constructor() {
    super(...arguments);
    this._events = {};
    this._rules = {};
  }
  getRules() {
    return typeof this._jsonModel.rules !== 'object' ? {} : this._jsonModel.rules;
  }
  getCompiledRule(eName, rule) {
    if (!(eName in this._rules)) {
      const eString = rule || this.getRules()[eName];
      if (typeof eString === 'string' && eString.length > 0) {
        try {
          this._rules[eName] = this.ruleEngine.compileRule(eString);
        } catch (e) {
          this.form.logger.error(`Unable to compile rule \`"${eName}" : "${eString}"\` Exception : ${e}`);
        }
      } else {
        throw new Error(`only expression strings are supported. ${typeof eString} types are not supported`);
      }
    }
    return this._rules[eName];
  }
  getCompiledEvent(eName) {
    var _a;
    if (!(eName in this._events)) {
      let eString = (_a = this._jsonModel.events) === null || _a === void 0 ? void 0 : _a[eName];
      if (typeof eString === 'string' && eString.length > 0) {
        eString = [eString];
      }
      if (typeof eString !== 'undefined' && eString.length > 0) {
        this._events[eName] = eString.map(x => {
          try {
            return this.ruleEngine.compileRule(x);
          } catch (e) {
            this.form.logger.error(`Unable to compile expression \`"${eName}" : "${eString}"\` Exception : ${e}`);
          }
          return null;
        }).filter(x => x !== null);
      }
    }
    return this._events[eName] || [];
  }
  applyUpdates(updates) {
    Object.entries(updates).forEach(_ref => {
      let [key, value] = _ref;
      if (key in BaseNode_1.editableProperties || key in this && typeof this[key] !== 'function') {
        try {
          this[key] = value;
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
  executeAllRules(context) {
    const entries = Object.entries(this.getRules());
    if (entries.length > 0) {
      const scope = this.getExpressionScope();
      entries.forEach(_ref2 => {
        let [prop, rule] = _ref2;
        const node = this.getCompiledRule(prop, rule);
        if (node) {
          const newVal = this.ruleEngine.execute(node, scope, context, true);
          if (BaseNode_1.editableProperties.indexOf(prop) > -1) {
            const oldAndNewValueAreEmpty = this.isEmpty() && this.isEmpty(newVal) && prop === 'value';
            if (!oldAndNewValueAreEmpty) {
              this[prop] = newVal;
            }
          } else {
            this.form.logger.warn(`${prop} is not a valid editable property.`);
          }
        }
      });
    }
  }
  getExpressionScope() {
    const parent = this.getNonTransparentParent();
    const target = {
      self: this.getRuleNode(),
      siblings: (parent === null || parent === void 0 ? void 0 : parent.ruleNodeReference()) || {}
    };
    const scope = new Proxy(target, {
      get: (target, prop) => {
        if (prop === Symbol.toStringTag) {
          return 'Object';
        }
        prop = prop;
        if (prop.startsWith('$')) {
          const retValue = target.self[prop];
          if (retValue instanceof BaseNode_1.BaseNode) {
            return retValue.getRuleNode();
          } else if (retValue instanceof Array) {
            return retValue.map(r => r instanceof BaseNode_1.BaseNode ? r.getRuleNode() : r);
          } else {
            return retValue;
          }
        } else {
          if (prop in target.siblings) {
            return target.siblings[prop];
          } else {
            return target.self[prop];
          }
        }
      },
      has: (target, prop) => {
        prop = prop;
        const selfPropertyOrChild = target.self[prop];
        const sibling = target.siblings[prop];
        return typeof selfPropertyOrChild != 'undefined' || typeof sibling != 'undefined';
      }
    });
    return scope;
  }
  executeEvent(context, node) {
    let updates;
    if (node) {
      updates = this.ruleEngine.execute(node, this.getExpressionScope(), context);
    }
    if (typeof updates !== 'undefined' && updates != null) {
      this.applyUpdates(updates);
    }
  }
  executeRule(event, context) {
    if (typeof event.payload.ruleName === 'undefined') {
      this.executeAllRules(context);
    }
  }
  executeExpression(expr) {
    const ruleContext = {
      'form': this.form,
      '$form': this.form.getRuleNode(),
      '$field': this.getRuleNode(),
      'field': this
    };
    const node = this.ruleEngine.compileRule(expr);
    return this.ruleEngine.execute(node, this.getExpressionScope(), ruleContext);
  }
  executeAction(action) {
    const context = {
      'form': this.form,
      '$form': this.form.getRuleNode(),
      '$field': this.getRuleNode(),
      'field': this,
      '$event': {
        type: action.type,
        payload: action.payload,
        target: this.getRuleNode()
      }
    };
    const eventName = action.isCustomEvent ? `custom:${action.type}` : action.type;
    const funcName = action.isCustomEvent ? `custom_${action.type}` : action.type;
    const node = this.getCompiledEvent(eventName);
    if (funcName in this && typeof this[funcName] === 'function') {
      this[funcName](action, context);
    }
    node.forEach(n => this.executeEvent(context, n));
    this.notifyDependents(action);
  }
}
exports.default = Scriptable;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/controller/EventQueue.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/controller/EventQueue.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const Logger_1 = __webpack_require__(/*! ./Logger */ "./node_modules/@aemforms/af-core/lib/controller/Logger.js");
class EventNode {
  constructor(_node, _event) {
    this._node = _node;
    this._event = _event;
  }
  get node() {
    return this._node;
  }
  get event() {
    return this._event;
  }
  isEqual(that) {
    return that !== null && that !== undefined && this._node == that._node && this._event.type == that._event.type;
  }
  toString() {
    return this._node.id + '__' + this.event.type;
  }
  valueOf() {
    return this.toString();
  }
}
class EventQueue {
  constructor() {
    let logger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Logger_1.Logger('off');
    this.logger = logger;
    this._isProcessing = false;
    this._pendingEvents = [];
    this._runningEventCount = {};
  }
  get length() {
    return this._pendingEvents.length;
  }
  get isProcessing() {
    return this._isProcessing;
  }
  isQueued(node, event) {
    const evntNode = new EventNode(node, event);
    return this._pendingEvents.find(x => evntNode.isEqual(x)) !== undefined;
  }
  queue(node, events) {
    let priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!node || !events) {
      return;
    }
    if (!(events instanceof Array)) {
      events = [events];
    }
    events.forEach(e => {
      const evntNode = new EventNode(node, e);
      const counter = this._runningEventCount[evntNode.valueOf()] || 0;
      if (counter < EventQueue.MAX_EVENT_CYCLE_COUNT) {
        this.logger.info(`Queued event : ${e.type} node: ${node.id} - ${node.name}`);
        if (priority) {
          const index = this._isProcessing ? 1 : 0;
          this._pendingEvents.splice(index, 0, evntNode);
        } else {
          this._pendingEvents.push(evntNode);
        }
        this._runningEventCount[evntNode.valueOf()] = counter + 1;
      } else {
        this.logger.info(`Skipped queueing event : ${e.type} node: ${node.id} - ${node.name} with count=${counter}`);
      }
    });
  }
  runPendingQueue() {
    if (this._isProcessing) {
      return;
    }
    this._isProcessing = true;
    while (this._pendingEvents.length > 0) {
      const e = this._pendingEvents[0];
      this.logger.info(`Dequeued event : ${e.event.type} node: ${e.node.id} - ${e.node.name}`);
      e.node.executeAction(e.event);
      this._pendingEvents.shift();
    }
    this._runningEventCount = {};
    this._isProcessing = false;
  }
}
EventQueue.MAX_EVENT_CYCLE_COUNT = 10;
exports.default = EventQueue;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/controller/Events.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/controller/Events.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveInstance = exports.AddInstance = exports.RemoveItem = exports.AddItem = exports.CustomEvent = exports.FieldChanged = exports.Reset = exports.Submit = exports.Focus = exports.ValidationComplete = exports.Blur = exports.Click = exports.FormLoad = exports.Initialize = exports.propertyChange = exports.ExecuteRule = exports.Valid = exports.Invalid = exports.Change = void 0;
class ActionImpl {
  constructor(payload, type, _metadata) {
    this._metadata = _metadata;
    this._payload = payload;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  get payload() {
    return this._payload;
  }
  get metadata() {
    return this._metadata;
  }
  get target() {
    return this._target;
  }
  get isCustomEvent() {
    return false;
  }
  payloadToJson() {
    return this.payload;
  }
  toJson() {
    return {
      payload: this.payloadToJson(),
      type: this.type,
      isCustomEvent: this.isCustomEvent
    };
  }
  toString() {
    return JSON.stringify(this.toJson());
  }
}
class Change extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'change', {
      dispatch
    });
  }
  withAdditionalChange(change) {
    return new Change(this.payload.changes.concat(change.payload.changes), this.metadata);
  }
}
exports.Change = Change;
class Invalid extends ActionImpl {
  constructor() {
    let payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super(payload, 'invalid', {});
  }
}
exports.Invalid = Invalid;
class Valid extends ActionImpl {
  constructor() {
    let payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super(payload, 'valid', {});
  }
}
exports.Valid = Valid;
class ExecuteRule extends ActionImpl {
  constructor() {
    let payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'executeRule', {
      dispatch
    });
  }
}
exports.ExecuteRule = ExecuteRule;
const propertyChange = (propertyName, currentValue, prevValue) => {
  return new Change({
    changes: [{
      propertyName,
      currentValue,
      prevValue
    }]
  });
};
exports.propertyChange = propertyChange;
class Initialize extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'initialize', {
      dispatch
    });
  }
}
exports.Initialize = Initialize;
class FormLoad extends ActionImpl {
  constructor() {
    super({}, 'load', {
      dispatch: false
    });
  }
}
exports.FormLoad = FormLoad;
class Click extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'click', {
      dispatch
    });
  }
}
exports.Click = Click;
class Blur extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'blur', {
      dispatch
    });
  }
}
exports.Blur = Blur;
class ValidationComplete extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'validationComplete', {
      dispatch
    });
  }
}
exports.ValidationComplete = ValidationComplete;
class Focus extends ActionImpl {
  constructor() {
    super({}, 'focus', {
      dispatch: false
    });
  }
}
exports.Focus = Focus;
class Submit extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'submit', {
      dispatch
    });
  }
}
exports.Submit = Submit;
class Reset extends ActionImpl {
  constructor(payload) {
    let dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super(payload, 'reset', {
      dispatch
    });
  }
}
exports.Reset = Reset;
class FieldChanged extends ActionImpl {
  constructor(changes, field) {
    super({
      field,
      changes
    }, 'fieldChanged');
  }
}
exports.FieldChanged = FieldChanged;
class CustomEvent extends ActionImpl {
  constructor(eventName) {
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    super(payload, eventName, {
      dispatch
    });
  }
  get isCustomEvent() {
    return true;
  }
}
exports.CustomEvent = CustomEvent;
class AddItem extends ActionImpl {
  constructor(payload) {
    super(payload, 'addItem');
  }
}
exports.AddItem = AddItem;
class RemoveItem extends ActionImpl {
  constructor(payload) {
    super(payload, 'removeItem');
  }
}
exports.RemoveItem = RemoveItem;
class AddInstance extends ActionImpl {
  constructor(payload) {
    super(payload, 'addInstance');
  }
}
exports.AddInstance = AddInstance;
class RemoveInstance extends ActionImpl {
  constructor(payload) {
    super(payload, 'removeInstance');
  }
}
exports.RemoveInstance = RemoveInstance;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/controller/Logger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/controller/Logger.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;
const levels = {
  off: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
class Logger {
  constructor() {
    let logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'off';
    this.logLevel = levels[logLevel];
  }
  debug(msg) {
    this.log(msg, 'debug');
  }
  info(msg) {
    this.log(msg, 'info');
  }
  warn(msg) {
    this.log(msg, 'warn');
  }
  error(msg) {
    this.log(msg, 'error');
  }
  log(msg, level) {
    if (this.logLevel !== 0 && this.logLevel <= levels[level]) {
      console[level](msg);
    }
  }
}
exports.Logger = Logger;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/data/DataGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/data/DataGroup.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const DataValue_1 = __importDefault(__webpack_require__(/*! ./DataValue */ "./node_modules/@aemforms/af-core/lib/data/DataValue.js"));
const EmptyDataValue_1 = __importDefault(__webpack_require__(/*! ./EmptyDataValue */ "./node_modules/@aemforms/af-core/lib/data/EmptyDataValue.js"));
class DataGroup extends DataValue_1.default {
  constructor(_name, _value) {
    let _type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : typeof _value;
    super(_name, _value, _type);
    if (_value instanceof Array) {
      this.$_items = _value.map((value, index) => {
        return this.createEntry(index, value);
      });
    } else {
      this.$_items = Object.fromEntries(Object.entries(_value).map(_ref => {
        let [key, value] = _ref;
        return [key, this.createEntry(key, value)];
      }));
    }
  }
  createEntry(key, value) {
    const t = value instanceof Array ? 'array' : typeof value;
    if (typeof value === 'object' && value != null) {
      return new DataGroup(key, value, t);
    } else {
      return new DataValue_1.default(key, value, t);
    }
  }
  get $value() {
    const enabled = this.$_fields.find(x => x.enabled !== false);
    if (!enabled && this.$_fields.length) {
      return this.$type === 'array' ? [] : {};
    } else if (this.$type === 'array') {
      return Object.values(this.$_items).filter(x => typeof x !== 'undefined').map(x => x.$value);
    } else {
      return Object.fromEntries(Object.values(this.$_items).filter(x => typeof x !== 'undefined').map(x => {
        return [x.$name, x.$value];
      }));
    }
  }
  get $length() {
    return Object.entries(this.$_items).length;
  }
  $convertToDataValue() {
    return new DataValue_1.default(this.$name, this.$value, this.$type);
  }
  $addDataNode(name, value) {
    let override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (value !== EmptyDataValue_1.default) {
      if (this.$type === 'array') {
        const index = name;
        if (!override) {
          this.$_items.splice(index, 0, value);
        } else {
          this.$_items[name] = value;
        }
      } else {
        this.$_items[name] = value;
      }
    }
  }
  $removeDataNode(name) {
    this.$_items[name] = undefined;
  }
  $getDataNode(name) {
    if (this.$_items.hasOwnProperty(name)) {
      return this.$_items[name];
    }
  }
  $containsDataNode(name) {
    return this.$_items.hasOwnProperty(name) && typeof this.$_items[name] !== 'undefined';
  }
  get $isDataGroup() {
    return true;
  }
}
exports.default = DataGroup;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/data/DataValue.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/data/DataValue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class DataValue {
  constructor($_name, $_value) {
    let $_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : typeof $_value;
    this.$_name = $_name;
    this.$_value = $_value;
    this.$_type = $_type;
    this.$_fields = [];
  }
  valueOf() {
    return this.$_value;
  }
  get $name() {
    return this.$_name;
  }
  get $value() {
    const enabled = this.$_fields.find(x => x.enabled !== false);
    if (!enabled && this.$_fields.length) {
      return undefined;
    }
    return this.$_value;
  }
  setValue(typedValue, originalValue, fromField) {
    this.$_value = typedValue;
    this.$_fields.forEach(x => {
      if (fromField !== x) {
        x.value = originalValue;
      }
    });
  }
  get $type() {
    return this.$_type;
  }
  $bindToField(field) {
    if (this.$_fields.indexOf(field) === -1) {
      this.$_fields.push(field);
    }
  }
  $convertToDataValue() {
    return this;
  }
  get $isDataGroup() {
    return false;
  }
}
exports.default = DataValue;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/data/EmptyDataValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/data/EmptyDataValue.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const DataValue_1 = __importDefault(__webpack_require__(/*! ./DataValue */ "./node_modules/@aemforms/af-core/lib/data/DataValue.js"));
const value = Symbol('NullValue');
class NullDataValueClass extends DataValue_1.default {
  constructor() {
    super('', value, 'null');
  }
  setValue() {}
  $bindToField() {}
  $length() {
    return 0;
  }
  $convertToDataValue() {
    return this;
  }
  $addDataNode() {}
  $removeDataNode() {}
  $getDataNode() {
    return this;
  }
  $containsDataNode() {
    return false;
  }
}
const NullDataValue = new NullDataValueClass();
exports.default = NullDataValue;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.request = exports.FunctionRuntime = exports.extractFileInfo = exports.getFileSizeInBytes = exports.Scriptable = exports.Node = exports.FormMetaData = exports.FileUpload = exports.FileObject = exports.Fieldset = exports.Field = exports.Container = exports.CheckboxGroup = exports.Checkbox = exports.BaseNode = exports.Form = void 0;
__exportStar(__webpack_require__(/*! ./FormInstance */ "./node_modules/@aemforms/af-core/lib/FormInstance.js"), exports);
__exportStar(__webpack_require__(/*! ./types/index */ "./node_modules/@aemforms/af-core/lib/types/index.js"), exports);
__exportStar(__webpack_require__(/*! ./controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/TranslationUtils */ "./node_modules/@aemforms/af-core/lib/utils/TranslationUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/SchemaUtils */ "./node_modules/@aemforms/af-core/lib/utils/SchemaUtils.js"), exports);
const FormUtils_1 = __webpack_require__(/*! ./utils/FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
Object.defineProperty(exports, "getFileSizeInBytes", {
  enumerable: true,
  get: function () {
    return FormUtils_1.getFileSizeInBytes;
  }
});
Object.defineProperty(exports, "extractFileInfo", {
  enumerable: true,
  get: function () {
    return FormUtils_1.extractFileInfo;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function () {
    return FormUtils_1.isEmpty;
  }
});
const BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./node_modules/@aemforms/af-core/lib/BaseNode.js");
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function () {
    return BaseNode_1.BaseNode;
  }
});
const Checkbox_1 = __importDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/@aemforms/af-core/lib/Checkbox.js"));
exports.Checkbox = Checkbox_1.default;
const CheckboxGroup_1 = __importDefault(__webpack_require__(/*! ./CheckboxGroup */ "./node_modules/@aemforms/af-core/lib/CheckboxGroup.js"));
exports.CheckboxGroup = CheckboxGroup_1.default;
const Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./node_modules/@aemforms/af-core/lib/Container.js"));
exports.Container = Container_1.default;
const Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
exports.Field = Field_1.default;
const Fieldset_1 = __webpack_require__(/*! ./Fieldset */ "./node_modules/@aemforms/af-core/lib/Fieldset.js");
Object.defineProperty(exports, "Fieldset", {
  enumerable: true,
  get: function () {
    return Fieldset_1.Fieldset;
  }
});
const FileObject_1 = __webpack_require__(/*! ./FileObject */ "./node_modules/@aemforms/af-core/lib/FileObject.js");
Object.defineProperty(exports, "FileObject", {
  enumerable: true,
  get: function () {
    return FileObject_1.FileObject;
  }
});
const FileUpload_1 = __importDefault(__webpack_require__(/*! ./FileUpload */ "./node_modules/@aemforms/af-core/lib/FileUpload.js"));
exports.FileUpload = FileUpload_1.default;
const FormMetaData_1 = __importDefault(__webpack_require__(/*! ./FormMetaData */ "./node_modules/@aemforms/af-core/lib/FormMetaData.js"));
exports.FormMetaData = FormMetaData_1.default;
const Node_1 = __importDefault(__webpack_require__(/*! ./Node */ "./node_modules/@aemforms/af-core/lib/Node.js"));
exports.Node = Node_1.default;
const Scriptable_1 = __importDefault(__webpack_require__(/*! ./Scriptable */ "./node_modules/@aemforms/af-core/lib/Scriptable.js"));
exports.Scriptable = Scriptable_1.default;
const Form_1 = __importDefault(__webpack_require__(/*! ./Form */ "./node_modules/@aemforms/af-core/lib/Form.js"));
exports.Form = Form_1.default;
const FunctionRuntime_1 = __webpack_require__(/*! ./rules/FunctionRuntime */ "./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js");
Object.defineProperty(exports, "FunctionRuntime", {
  enumerable: true,
  get: function () {
    return FunctionRuntime_1.FunctionRuntime;
  }
});
Object.defineProperty(exports, "request", {
  enumerable: true,
  get: function () {
    return FunctionRuntime_1.request;
  }
});

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionRuntime = exports.submit = exports.request = void 0;
const Events_1 = __webpack_require__(/*! ../controller/Events */ "./node_modules/@aemforms/af-core/lib/controller/Events.js");
const Fetch_1 = __webpack_require__(/*! ../utils/Fetch */ "./node_modules/@aemforms/af-core/lib/utils/Fetch.js");
const FileObject_1 = __webpack_require__(/*! ../FileObject */ "./node_modules/@aemforms/af-core/lib/FileObject.js");
const FormUtils_1 = __webpack_require__(/*! ../utils/FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
const JsonUtils_1 = __webpack_require__(/*! ../utils/JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
const getCustomEventName = name => {
  const eName = name;
  if (eName.length > 0 && eName.startsWith('custom:')) {
    return eName.substring('custom:'.length);
  }
  return eName;
};
const request = (context, uri, httpVerb, payload, success, error, headers) => __awaiter(void 0, void 0, void 0, function* () {
  var _a;
  const endpoint = uri;
  const requestOptions = {
    method: httpVerb
  };
  let inputPayload;
  if (payload && payload instanceof FileObject_1.FileObject && payload.data instanceof File) {
    const formData = new FormData();
    formData.append(payload.name, payload.data);
    inputPayload = formData;
  } else if (payload instanceof FormData) {
    inputPayload = payload;
  } else if (payload && typeof payload === 'object' && Object.keys(payload).length > 0) {
    const headerNames = Object.keys(headers);
    if (headerNames.length > 0) {
      requestOptions.headers = Object.assign(Object.assign({}, headers), headerNames.indexOf('Content-Type') === -1 ? {
        'Content-Type': 'application/json'
      } : {});
    } else {
      requestOptions.headers = {
        'Content-Type': 'application/json'
      };
    }
    const contentType = ((_a = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers) === null || _a === void 0 ? void 0 : _a['Content-Type']) || 'application/json';
    if (contentType === 'application/json') {
      inputPayload = JSON.stringify(payload);
    } else if (contentType.indexOf('multipart/form-data') > -1) {
      inputPayload = multipartFormData(payload);
    } else if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
      inputPayload = urlEncoded(payload);
    }
  }
  const result = yield (0, Fetch_1.request)(endpoint, inputPayload, requestOptions);
  if ((result === null || result === void 0 ? void 0 : result.status) >= 200 && (result === null || result === void 0 ? void 0 : result.status) <= 299) {
    const eName = getCustomEventName(success);
    context.form.dispatch(new Events_1.CustomEvent(eName, result, true));
  } else {
    context.form.logger.error('Error invoking a rest API');
    const eName = getCustomEventName(error);
    context.form.dispatch(new Events_1.CustomEvent(eName, {}, true));
  }
});
exports.request = request;
const urlEncoded = data => {
  const formData = new URLSearchParams();
  Object.entries(data).forEach(_ref => {
    let [key, value] = _ref;
    if (value != null && typeof value === 'object') {
      formData.append(key, (0, JsonUtils_1.jsonString)(value));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};
const multipartFormData = (data, attachments) => {
  const formData = new FormData();
  Object.entries(data).forEach(_ref2 => {
    let [key, value] = _ref2;
    if (value != null && typeof value === 'object') {
      formData.append(key, (0, JsonUtils_1.jsonString)(value));
    } else {
      formData.append(key, value);
    }
  });
  const addAttachmentToFormData = (objValue, formData) => {
    if ((objValue === null || objValue === void 0 ? void 0 : objValue.data) instanceof File) {
      let attIdentifier = `${objValue === null || objValue === void 0 ? void 0 : objValue.dataRef}/${objValue === null || objValue === void 0 ? void 0 : objValue.name}`;
      if (!attIdentifier.startsWith('/')) {
        attIdentifier = `/${attIdentifier}`;
      }
      formData.append(attIdentifier, objValue.data);
    }
  };
  if (attachments) {
    Object.keys(attachments).reduce((acc, curr) => {
      const objValue = attachments[curr];
      if (objValue && objValue instanceof Array) {
        return [...acc, ...objValue.map(x => addAttachmentToFormData(x, formData))];
      } else {
        return [...acc, addAttachmentToFormData(objValue, formData)];
      }
    }, []);
  }
  return formData;
};
const submit = function (context, success, error) {
  let submitAs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'multipart/form-data';
  let input_data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = context.form.action;
    let data = input_data;
    if (typeof data != 'object' || data == null) {
      data = context.form.exportData();
    }
    const attachments = (0, FormUtils_1.getAttachments)(context.form);
    let submitContentType = submitAs;
    const submitDataAndMetaData = {
      'data': data,
      'submitMetadata': {
        'lang': context.form.lang
      }
    };
    let formData = submitDataAndMetaData;
    if (Object.keys(attachments).length > 0 || submitAs === 'multipart/form-data') {
      formData = multipartFormData(submitDataAndMetaData, attachments);
      submitContentType = 'multipart/form-data';
    }
    yield (0, exports.request)(context, endpoint, 'POST', formData, success, error, {
      'Content-Type': submitContentType
    });
  });
};
exports.submit = submit;
const createAction = function (name) {
  let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  switch (name) {
    case 'change':
      return new Events_1.Change(payload);
    case 'submit':
      return new Events_1.Submit(payload);
    case 'click':
      return new Events_1.Click(payload);
    case 'addItem':
      return new Events_1.AddItem(payload);
    case 'removeItem':
      return new Events_1.RemoveItem(payload);
    case 'reset':
      return new Events_1.Reset(payload);
    case 'addInstance':
      return new Events_1.AddInstance(payload);
    case 'removeInstance':
      return new Events_1.RemoveInstance(payload);
    default:
      console.error('invalid action');
  }
};
class FunctionRuntimeImpl {
  constructor() {
    this.customFunctions = {};
  }
  registerFunctions(functions) {
    Object.entries(functions).forEach(_ref3 => {
      let [name, funcDef] = _ref3;
      let finalFunction = funcDef;
      if (typeof funcDef === 'function') {
        finalFunction = {
          _func: args => {
            return funcDef(...args);
          },
          _signature: []
        };
      }
      if (!finalFunction.hasOwnProperty('_func')) {
        console.warn(`Unable to register function with name ${name}.`);
        return;
      }
      this.customFunctions[name] = finalFunction;
    });
  }
  unregisterFunctions() {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }
    names.forEach(name => {
      if (name in this.customFunctions) {
        delete this.customFunctions[name];
      }
    });
  }
  getFunctions() {
    function isArray(obj) {
      if (obj !== null) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
      return false;
    }
    function valueOf(a) {
      if (a === null || a === undefined) {
        return a;
      }
      if (isArray(a)) {
        return a.map(i => valueOf(i));
      }
      return a.valueOf();
    }
    function toString(a) {
      if (a === null || a === undefined) {
        return '';
      }
      return a.toString();
    }
    const defaultFunctions = {
      validate: {
        _func: (args, data, interpreter) => {
          const element = args[0];
          let validation;
          if (typeof element === 'string' || typeof element === 'undefined') {
            validation = interpreter.globals.form.validate();
          } else {
            validation = interpreter.globals.form.getElement(element.$id).validate();
          }
          if (Array.isArray(validation) && validation.length) {
            interpreter.globals.form.logger.error('Form Validation Error');
          }
          return validation;
        },
        _signature: []
      },
      setFocus: {
        _func: (args, data, interpreter) => {
          const element = args[0];
          try {
            const field = interpreter.globals.form.getElement(element.$id);
            interpreter.globals.form.setFocus(field);
          } catch (e) {
            interpreter.globals.form.logger.error('Invalid argument passed in setFocus. An element is expected');
          }
        },
        _signature: []
      },
      getData: {
        _func: (args, data, interpreter) => {
          interpreter.globals.form.logger.warn('The `getData` function is depricated. Use `exportData` instead.');
          return interpreter.globals.form.exportData();
        },
        _signature: []
      },
      exportData: {
        _func: (args, data, interpreter) => {
          return interpreter.globals.form.exportData();
        },
        _signature: []
      },
      importData: {
        _func: (args, data, interpreter) => {
          const inputData = args[0];
          if (typeof inputData === 'object' && inputData !== null) {
            interpreter.globals.form.importData(inputData);
          }
          return {};
        },
        _signature: []
      },
      submitForm: {
        _func: (args, data, interpreter) => {
          const success = toString(args[0]);
          const error = toString(args[1]);
          const submit_as = args.length > 2 ? toString(args[2]) : 'multipart/form-data';
          const submit_data = args.length > 3 ? valueOf(args[3]) : null;
          interpreter.globals.form.dispatch(new Events_1.Submit({
            success,
            error,
            submit_as,
            data: submit_data
          }));
          return {};
        },
        _signature: []
      },
      request: {
        _func: (args, data, interpreter) => {
          const uri = toString(args[0]);
          const httpVerb = toString(args[1]);
          const payload = valueOf(args[2]);
          let success,
            error,
            headers = {};
          if (typeof args[3] === 'string') {
            interpreter.globals.form.logger.warn('This usage of request is deprecated. Please see the documentation and update');
            success = valueOf(args[3]);
            error = valueOf(args[4]);
          } else {
            headers = valueOf(args[3]);
            success = valueOf(args[4]);
            error = valueOf(args[5]);
          }
          (0, exports.request)(interpreter.globals, uri, httpVerb, payload, success, error, headers);
          return {};
        },
        _signature: []
      },
      dispatchEvent: {
        _func: (args, data, interpreter) => {
          const element = args[0];
          let eventName = valueOf(args[1]);
          let payload = args.length > 2 ? valueOf(args[2]) : undefined;
          let dispatch = false;
          if (typeof element === 'string') {
            payload = eventName;
            eventName = element;
            dispatch = true;
          }
          let event;
          if (eventName.startsWith('custom:')) {
            event = new Events_1.CustomEvent(eventName.substring('custom:'.length), payload, dispatch);
          } else {
            event = createAction(eventName, payload);
          }
          if (event != null) {
            if (typeof element === 'string') {
              interpreter.globals.form.dispatch(event);
            } else {
              interpreter.globals.form.getElement(element.$id).dispatch(event);
            }
          }
          return {};
        },
        _signature: []
      }
    };
    return Object.assign(Object.assign({}, defaultFunctions), this.customFunctions);
  }
}
exports.FunctionRuntime = new FunctionRuntimeImpl();

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/rules/RuleEngine.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/rules/RuleEngine.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const json_formula_1 = __importDefault(__webpack_require__(/*! @adobe/json-formula */ "./node_modules/@adobe/json-formula/src/json-formula.js"));
const FunctionRuntime_1 = __webpack_require__(/*! ./FunctionRuntime */ "./node_modules/@aemforms/af-core/lib/rules/FunctionRuntime.js");
class RuleEngine {
  constructor() {
    this._globalNames = ['$form', '$field', '$event'];
    this.debugInfo = [];
    const customFunctions = FunctionRuntime_1.FunctionRuntime.getFunctions();
    this.formulaEngine = new json_formula_1.default(customFunctions, undefined, this.debugInfo);
  }
  compileRule(rule) {
    return this.formulaEngine.compile(rule, this._globalNames);
  }
  execute(node, data, globals) {
    let useValueOf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var _a, _b, _c, _d, _e, _f;
    const oldContext = this._context;
    this._context = globals;
    let res = undefined;
    try {
      res = this.formulaEngine.run(node, data, 'en-US', globals);
    } catch (err) {
      (_c = (_b = (_a = this._context) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.logger) === null || _c === void 0 ? void 0 : _c.error(err);
    }
    while (this.debugInfo.length > 0) {
      (_f = (_e = (_d = this._context) === null || _d === void 0 ? void 0 : _d.form) === null || _e === void 0 ? void 0 : _e.logger) === null || _f === void 0 ? void 0 : _f.debug(this.debugInfo.pop());
    }
    let finalRes = res;
    if (useValueOf) {
      if (typeof res === 'object' && res !== null) {
        finalRes = Object.getPrototypeOf(res).valueOf.call(res);
      }
    }
    this._context = oldContext;
    return finalRes;
  }
  trackDependency(subscriber) {
    if (this._context && this._context.field !== undefined && this._context.field !== subscriber) {
      subscriber._addDependent(this._context.field);
    }
  }
}
exports.default = RuleEngine;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/types/Json.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/types/Json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constraintProps = exports.translationProps = void 0;
exports.translationProps = ['description', 'placeholder', 'enum', 'enumNames', 'label.value', 'constraintMessages.accept', 'constraintMessages.enum', 'constraintMessages.exclusiveMinimum', 'constraintMessages.exclusiveMaximum', 'constraintMessages.format', 'constraintMessages.maxFileSize', 'constraintMessages.maxLength', 'constraintMessages.maximum', 'constraintMessages.maxItems', 'constraintMessages.minLength', 'constraintMessages.minimum', 'constraintMessages.minItems', 'constraintMessages.pattern', 'constraintMessages.required', 'constraintMessages.step', 'constraintMessages.type', 'constraintMessages.validationExpression'];
exports.constraintProps = ['accept', 'enum', 'exclusiveMinimum', 'exclusiveMaximum', 'format', 'maxFileSize', 'maxLength', 'maximum', 'maxItems', 'minLength', 'minimum', 'minItems', 'pattern', 'required', 'step', 'validationExpression', 'enumNames'];

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/types/Model.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/types/Model.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationError = void 0;
class ValidationError {
  constructor() {
    let fieldName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    this.errorMessages = errorMessages;
    this.fieldName = fieldName;
  }
}
exports.ValidationError = ValidationError;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/types/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/types/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
__exportStar(__webpack_require__(/*! ./Json */ "./node_modules/@aemforms/af-core/lib/types/Json.js"), exports);
__exportStar(__webpack_require__(/*! ./Model */ "./node_modules/@aemforms/af-core/lib/types/Model.js"), exports);

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/DataRefParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/DataRefParser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveData = exports.tokenize = exports.repeatable = exports.global$ = exports.bracket = exports.identifier = exports.TOK_REPEATABLE = exports.TOK_GLOBAL = void 0;
const DataGroup_1 = __importDefault(__webpack_require__(/*! ../data/DataGroup */ "./node_modules/@aemforms/af-core/lib/data/DataGroup.js"));
const TOK_DOT = 'DOT';
const TOK_IDENTIFIER = 'Identifier';
exports.TOK_GLOBAL = 'Global';
exports.TOK_REPEATABLE = 'Repeatable';
const TOK_BRACKET = 'bracket';
const TOK_NUMBER = 'Number';
const globalStartToken = '$';
const repeatableStartToken = '#';
const identifier = (value, start) => {
  return {
    type: TOK_IDENTIFIER,
    value,
    start
  };
};
exports.identifier = identifier;
const bracket = (value, start) => {
  return {
    type: TOK_BRACKET,
    value,
    start
  };
};
exports.bracket = bracket;
const global$ = () => {
  return {
    type: exports.TOK_GLOBAL,
    start: 0,
    value: globalStartToken
  };
};
exports.global$ = global$;
const repeatable = () => {
  return {
    type: exports.TOK_REPEATABLE,
    start: 0,
    value: repeatableStartToken
  };
};
exports.repeatable = repeatable;
const isAlphaNum = function (ch) {
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9' || ch === '_';
};
const isGlobal = (prev, stream, pos) => {
  return prev === null && stream[pos] === globalStartToken;
};
const isRepeatable = (prev, stream, pos) => {
  return prev === null && stream[pos] === repeatableStartToken;
};
const isIdentifier = (stream, pos) => {
  const ch = stream[pos];
  if (ch === '$') {
    return stream.length > pos && isAlphaNum(stream[pos + 1]);
  }
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch === '_';
};
const isNum = ch => {
  return ch >= '0' && ch <= '9';
};
class Tokenizer {
  constructor(stream) {
    this.stream = stream;
    this._tokens = [];
    this._result_tokens = [];
    this._current = 0;
  }
  _consumeGlobal() {
    this._current += 1;
    return (0, exports.global$)();
  }
  _consumeRepeatable() {
    this._current += 1;
    return (0, exports.repeatable)();
  }
  _consumeUnquotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    while (this._current < stream.length && isAlphaNum(stream[this._current])) {
      this._current += 1;
    }
    return (0, exports.identifier)(stream.slice(start, this._current), start);
  }
  _consumeQuotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (stream[this._current] !== '"' && this._current < maxLength) {
      let current = this._current;
      if (stream[current] === '\\' && (stream[current + 1] === '\\' || stream[current + 1] === '"')) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    this._current += 1;
    return (0, exports.identifier)(JSON.parse(stream.slice(start, this._current)), start);
  }
  _consumeNumber(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (isNum(stream[this._current]) && this._current < maxLength) {
      this._current += 1;
    }
    const n = stream.slice(start, this._current);
    const value = parseInt(n, 10);
    return {
      type: TOK_NUMBER,
      value,
      start
    };
  }
  _consumeBracket(stream) {
    const start = this._current;
    this._current += 1;
    let value;
    if (isNum(stream[this._current])) {
      value = this._consumeNumber(stream).value;
    } else {
      throw new Error(`unexpected exception at position ${this._current}. Must be a character`);
    }
    if (this._current < this.stream.length && stream[this._current] !== ']') {
      throw new Error(`unexpected exception at position ${this._current}. Must be a character`);
    }
    this._current++;
    return (0, exports.bracket)(value, start);
  }
  tokenize() {
    const stream = this.stream;
    while (this._current < stream.length) {
      const prev = this._tokens.length ? this._tokens.slice(-1)[0] : null;
      if (isGlobal(prev, stream, this._current)) {
        const token = this._consumeGlobal();
        this._tokens.push(token);
        this._result_tokens.push(token);
      } else if (isRepeatable(prev, stream, this._current)) {
        const token = this._consumeRepeatable();
        this._tokens.push(token);
        this._result_tokens.push(token);
      } else if (isIdentifier(stream, this._current)) {
        const token = this._consumeUnquotedIdentifier(stream);
        this._tokens.push(token);
        this._result_tokens.push(token);
      } else if (stream[this._current] === '.' && prev != null && prev.type !== TOK_DOT) {
        this._tokens.push({
          type: TOK_DOT,
          value: '.',
          start: this._current
        });
        this._current += 1;
      } else if (stream[this._current] === '[') {
        const token = this._consumeBracket(stream);
        this._tokens.push(token);
        this._result_tokens.push(token);
      } else if (stream[this._current] === '"') {
        const token = this._consumeQuotedIdentifier(stream);
        this._tokens.push(token);
        this._result_tokens.push(token);
      } else {
        const p = Math.max(0, this._current - 2);
        const s = Math.min(this.stream.length, this._current + 2);
        throw new Error(`Exception at parsing stream ${this.stream.slice(p, s)}`);
      }
    }
    return this._result_tokens;
  }
}
const tokenize = stream => {
  return new Tokenizer(stream).tokenize();
};
exports.tokenize = tokenize;
const resolveData = (data, input, create) => {
  let tokens;
  if (typeof input === 'string') {
    tokens = (0, exports.tokenize)(input);
  } else {
    tokens = input;
  }
  let result = data;
  let i = 0;
  const createIntermediateNode = (token, nextToken, create) => {
    return nextToken === null ? create : nextToken.type === TOK_BRACKET ? new DataGroup_1.default(token.value, [], 'array') : new DataGroup_1.default(token.value, {});
  };
  while (i < tokens.length && result != null) {
    const token = tokens[i];
    if (token.type === exports.TOK_GLOBAL) {
      result = data;
    } else if (token.type === TOK_IDENTIFIER) {
      if (result instanceof DataGroup_1.default && result.$type === 'object') {
        if (result.$containsDataNode(token.value) && result.$getDataNode(token.value).$value !== null) {
          result = result.$getDataNode(token.value);
        } else if (create) {
          const nextToken = i < tokens.length - 1 ? tokens[i + 1] : null;
          const toCreate = createIntermediateNode(token, nextToken, create);
          result.$addDataNode(token.value, toCreate);
          result = toCreate;
        } else {
          result = undefined;
        }
      } else {
        throw new Error(`Looking for ${token.value} in ${result.$value}`);
      }
    } else if (token.type === TOK_BRACKET) {
      if (result instanceof DataGroup_1.default && result.$type === 'array') {
        const index = token.value;
        if (index < result.$length) {
          result = result.$getDataNode(index);
        } else if (create) {
          const nextToken = i < tokens.length - 1 ? tokens[i + 1] : null;
          const toCreate = createIntermediateNode(token, nextToken, create);
          result.$addDataNode(index, toCreate);
          result = toCreate;
        } else {
          result = undefined;
        }
      } else {
        throw new Error(`Looking for index ${token.value} in non array${result.$value}`);
      }
    }
    i += 1;
  }
  return result;
};
exports.resolveData = resolveData;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/Fetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/Fetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertQueryString = exports.request = void 0;
const request = function (url) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const opts = Object.assign(Object.assign({}, defaultRequestOptions), options);
  const updatedUrl = opts.method === 'GET' && data ? (0, exports.convertQueryString)(url, data) : url;
  if (opts.method !== 'GET') {
    opts.body = data;
  }
  return fetch(updatedUrl, Object.assign({}, opts)).then(response => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let body;
    if (!response.ok) {
      console.error(`Error fetching response from ${url} : ${response.statusText}`);
      body = response.statusText;
    } else {
      if ((_b = (_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a.get('Content-Type')) === null || _b === void 0 ? void 0 : _b.includes('application/json')) {
        body = yield response.json();
      } else {
        body = yield response.text();
      }
    }
    const headers = {};
    (_c = response === null || response === void 0 ? void 0 : response.headers) === null || _c === void 0 ? void 0 : _c.forEach((value, key) => {
      headers[key] = value;
    });
    return {
      status: response.status,
      body,
      headers
    };
  }));
};
exports.request = request;
const defaultRequestOptions = {
  method: 'GET'
};
const convertQueryString = (endpoint, payload) => {
  if (!payload) {
    return endpoint;
  }
  let updatedPayload = {};
  try {
    updatedPayload = JSON.parse(payload);
  } catch (err) {
    console.log('Query params invalid');
  }
  const params = [];
  Object.keys(updatedPayload).forEach(key => {
    if (Array.isArray(updatedPayload[key])) {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(updatedPayload[key]))}`);
    } else {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(updatedPayload[key])}`);
    }
  });
  if (!params.length) {
    return endpoint;
  }
  return endpoint.includes('?') ? `${endpoint}&${params.join('&')}` : `${endpoint}?${params.join('&')}`;
};
exports.convertQueryString = convertQueryString;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/FormCreationUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/FormCreationUtils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldFactory = void 0;
const InstanceManager_1 = __webpack_require__(/*! ../InstanceManager */ "./node_modules/@aemforms/af-core/lib/InstanceManager.js");
const Fieldset_1 = __webpack_require__(/*! ../Fieldset */ "./node_modules/@aemforms/af-core/lib/Fieldset.js");
const JsonUtils_1 = __webpack_require__(/*! ./JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
const FileUpload_1 = __importDefault(__webpack_require__(/*! ../FileUpload */ "./node_modules/@aemforms/af-core/lib/FileUpload.js"));
const Checkbox_1 = __importDefault(__webpack_require__(/*! ../Checkbox */ "./node_modules/@aemforms/af-core/lib/Checkbox.js"));
const CheckboxGroup_1 = __importDefault(__webpack_require__(/*! ../CheckboxGroup */ "./node_modules/@aemforms/af-core/lib/CheckboxGroup.js"));
const DateField_1 = __importDefault(__webpack_require__(/*! ../DateField */ "./node_modules/@aemforms/af-core/lib/DateField.js"));
const Field_1 = __importDefault(__webpack_require__(/*! ../Field */ "./node_modules/@aemforms/af-core/lib/Field.js"));
const alternateFieldTypeMapping = {
  'text': 'text-input',
  'number': 'number-input',
  'email': 'text-input',
  'file': 'file-input',
  'range': 'range',
  'textarea': 'multiline-input'
};
class FormFieldFactoryImpl {
  createField(child, _options) {
    let retVal;
    const options = Object.assign(Object.assign({}, _options), {
      fieldFactory: this
    });
    child.fieldType = child.fieldType ? child.fieldType in alternateFieldTypeMapping ? alternateFieldTypeMapping[child.fieldType] : child.fieldType : 'text-input';
    if ((0, JsonUtils_1.isRepeatable)(child)) {
      const newChild = Object.assign(Object.assign(Object.assign({}, child), 'items' in child && {
        'type': 'object'
      }), {
        minOccur: undefined,
        maxOccur: undefined,
        repeatable: undefined,
        name: undefined
      });
      const newJson = Object.assign({
        minItems: child.minOccur || 0,
        maxItems: child.maxOccur || -1,
        fieldType: child.fieldType,
        type: 'array',
        name: child.name,
        dataRef: child.dataRef
      }, {
        'items': [newChild]
      });
      retVal = new InstanceManager_1.InstanceManager(newJson, options);
    } else if ('items' in child) {
      retVal = new Fieldset_1.Fieldset(child, options);
    } else {
      if ((0, JsonUtils_1.isFile)(child) || child.fieldType === 'file-input') {
        retVal = new FileUpload_1.default(child, options);
      } else if ((0, JsonUtils_1.isCheckbox)(child)) {
        retVal = new Checkbox_1.default(child, options);
      } else if ((0, JsonUtils_1.isCheckboxGroup)(child)) {
        retVal = new CheckboxGroup_1.default(child, options);
      } else if ((0, JsonUtils_1.isDateField)(child)) {
        retVal = new DateField_1.default(child, options);
      } else {
        retVal = new Field_1.default(child, options);
      }
    }
    return retVal;
  }
}
exports.FormFieldFactory = new FormFieldFactoryImpl();

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/FormUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sitesModelToFormModel = exports.dataURItoBlob = exports.extractFileInfo = exports.isDataUrl = exports.IdGenerator = exports.getFileSizeInBytes = exports.getAttachments = exports.isEmpty = exports.randomWord = void 0;
const JsonUtils_1 = __webpack_require__(/*! ./JsonUtils */ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js");
const FileObject_1 = __webpack_require__(/*! ../FileObject */ "./node_modules/@aemforms/af-core/lib/FileObject.js");
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'.split('');
const fileSizeRegex = /^(\d*\.?\d+)(\\?(?=[KMGT])([KMGT])(?:i?B)?|B?)$/i;
const randomWord = l => {
  const ret = [];
  for (let i = 0; i <= l; i++) {
    let randIndex;
    if (i === 0) {
      randIndex = Math.floor(Math.random() * (chars.length - 11));
    } else {
      randIndex = Math.floor(Math.random() * chars.length);
    }
    ret.push(chars[randIndex]);
  }
  return ret.join('');
};
exports.randomWord = randomWord;
const isEmpty = value => {
  return value === '' || value === null || value === undefined;
};
exports.isEmpty = isEmpty;
const getAttachments = input => {
  const items = input.items || [];
  return items === null || items === void 0 ? void 0 : items.reduce((acc, item) => {
    let ret = null;
    if (item.isContainer) {
      ret = (0, exports.getAttachments)(item);
    } else {
      if ((0, JsonUtils_1.isFile)(item.getState())) {
        ret = {};
        const name = item.name || '';
        const dataRef = item.dataRef != null ? item.dataRef : name.length > 0 ? item.name : undefined;
        if (item.value instanceof Array) {
          ret[item.id] = item.value.map(x => {
            return Object.assign(Object.assign({}, x), {
              'dataRef': dataRef
            });
          });
        } else if (item.value != null) {
          ret[item.id] = Object.assign(Object.assign({}, item.value), {
            'dataRef': dataRef
          });
        }
      }
    }
    return Object.assign(acc, ret);
  }, {});
};
exports.getAttachments = getAttachments;
const getFileSizeInBytes = str => {
  let retVal = 0;
  if (typeof str === 'string') {
    const matches = fileSizeRegex.exec(str.trim());
    if (matches != null) {
      retVal = sizeToBytes(parseFloat(matches[1]), (matches[2] || 'kb').toUpperCase());
    }
  }
  return retVal;
};
exports.getFileSizeInBytes = getFileSizeInBytes;
const sizeToBytes = (size, symbol) => {
  const sizes = {
    'KB': 1,
    'MB': 2,
    'GB': 3,
    'TB': 4
  };
  const i = Math.pow(1024, sizes[symbol]);
  return Math.round(size * i);
};
const IdGenerator = function () {
  let initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  return function* () {
    const initialize = function () {
      const arr = [];
      for (let i = 0; i < initial; i++) {
        arr.push((0, exports.randomWord)(10));
      }
      return arr;
    };
    const passedIds = {};
    let ids = initialize();
    do {
      let x = ids.pop();
      while (x in passedIds) {
        if (ids.length === 0) {
          ids = initialize();
        }
        x = ids.pop();
      }
      passedIds[x] = true;
      yield ids.pop();
      if (ids.length === 0) {
        ids = initialize();
      }
    } while (ids.length > 0);
  }();
};
exports.IdGenerator = IdGenerator;
const isDataUrl = str => {
  const dataUrlRegex = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
  return dataUrlRegex.exec(str.trim()) != null;
};
exports.isDataUrl = isDataUrl;
const extractFileInfo = file => {
  if (file !== null) {
    let retVal = null;
    if (file instanceof FileObject_1.FileObject) {
      retVal = file;
    } else if (typeof File !== 'undefined' && file instanceof File) {
      retVal = {
        name: file.name,
        mediaType: file.type,
        size: file.size,
        data: file
      };
    } else if (typeof file === 'string' && (0, exports.isDataUrl)(file)) {
      const result = (0, exports.dataURItoBlob)(file);
      if (result !== null) {
        const {
          blob,
          name
        } = result;
        retVal = {
          name: name,
          mediaType: blob.type,
          size: blob.size,
          data: blob
        };
      }
    } else {
      let jFile = file;
      try {
        jFile = JSON.parse(file);
        retVal = jFile;
        if (!retVal.mediaType) {
          retVal.mediaType = retVal.type;
        }
      } catch (ex) {}
      if (typeof (jFile === null || jFile === void 0 ? void 0 : jFile.data) === 'string' && (0, exports.isDataUrl)(jFile === null || jFile === void 0 ? void 0 : jFile.data)) {
        const result = (0, exports.dataURItoBlob)(jFile === null || jFile === void 0 ? void 0 : jFile.data);
        if (result !== null) {
          const blob = result.blob;
          retVal = {
            name: jFile === null || jFile === void 0 ? void 0 : jFile.name,
            mediaType: (jFile === null || jFile === void 0 ? void 0 : jFile.type) || (jFile === null || jFile === void 0 ? void 0 : jFile.mediaType),
            size: blob.size,
            data: blob
          };
        }
      } else if (typeof jFile === 'string') {
        const fileName = jFile.split('/').pop();
        retVal = {
          name: fileName,
          mediaType: 'application/octet-stream',
          size: 0,
          data: jFile
        };
      } else if (typeof jFile === 'object') {
        retVal = {
          name: jFile === null || jFile === void 0 ? void 0 : jFile.name,
          mediaType: (jFile === null || jFile === void 0 ? void 0 : jFile.type) || (jFile === null || jFile === void 0 ? void 0 : jFile.mediaType),
          size: jFile === null || jFile === void 0 ? void 0 : jFile.size,
          data: jFile === null || jFile === void 0 ? void 0 : jFile.data
        };
      }
    }
    if (retVal !== null && retVal.data != null) {
      return new FileObject_1.FileObject(retVal);
    }
    return null;
  } else {
    return null;
  }
};
exports.extractFileInfo = extractFileInfo;
const dataURItoBlob = dataURI => {
  const regex = /^data:([a-z]+\/[a-z0-9-+.]+)?(?:;name=([^;]+))?(;base64)?,(.+)$/;
  const groups = regex.exec(dataURI);
  if (groups !== null) {
    const type = groups[1] || '';
    const name = groups[2] || 'unknown';
    const isBase64 = typeof groups[3] === 'string';
    if (isBase64) {
      const binary = atob(groups[4]);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      const blob = new window.Blob([new Uint8Array(array)], {
        type
      });
      return {
        name,
        blob
      };
    } else {
      const blob = new window.Blob([groups[4]], {
        type
      });
      return {
        name,
        blob
      };
    }
  } else {
    return null;
  }
};
exports.dataURItoBlob = dataURItoBlob;
const isFormContainer = model => {
  return (':items' in model || 'cqItems' in model) && (':itemsOrder' in model || 'cqItemsOrder' in model) && 'fieldType' in model;
};
const sitesModelToFormModel = sitesModel => {
  if (!sitesModel || !Object.keys(sitesModel).length) {
    return sitesModel;
  }
  if (isFormContainer(sitesModel)) {
    const itemsArr = [];
    const itemsOrder = sitesModel[':itemsOrder'] || sitesModel.cqItemsOrder;
    const items = sitesModel[':items'] || sitesModel.cqItems;
    itemsOrder.forEach(elemName => {
      if (isFormContainer(items[elemName])) {
        itemsArr.push((0, exports.sitesModelToFormModel)(items[elemName]));
      } else {
        itemsArr.push(items[elemName]);
      }
    });
    sitesModel.items = itemsArr;
  }
  return sitesModel;
};
exports.sitesModelToFormModel = sitesModelToFormModel;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/JsonUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRepeatable = exports.jsonString = exports.checkIfKeyAdded = exports.deepClone = exports.isDateField = exports.isCheckboxGroup = exports.isCheckbox = exports.checkIfConstraintsArePresent = exports.isFile = exports.getProperty = void 0;
const index_1 = __webpack_require__(/*! ../types/index */ "./node_modules/@aemforms/af-core/lib/types/index.js");
const SchemaUtils_1 = __webpack_require__(/*! ./SchemaUtils */ "./node_modules/@aemforms/af-core/lib/utils/SchemaUtils.js");
const getProperty = (data, key, def) => {
  if (key in data) {
    return data[key];
  } else if (!key.startsWith(':')) {
    const prefixedKey = `:${key}`;
    if (prefixedKey in data) {
      return data[prefixedKey];
    }
  }
  return def;
};
exports.getProperty = getProperty;
const isFile = function (item) {
  return (item === null || item === void 0 ? void 0 : item.type) === 'file' || (item === null || item === void 0 ? void 0 : item.type) === 'file[]' || ((item === null || item === void 0 ? void 0 : item.type) === 'string' || (item === null || item === void 0 ? void 0 : item.type) === 'string[]') && ((item === null || item === void 0 ? void 0 : item.format) === 'binary' || (item === null || item === void 0 ? void 0 : item.format) === 'data-url');
};
exports.isFile = isFile;
const checkIfConstraintsArePresent = function (item) {
  return index_1.constraintProps.some(cp => item[cp] !== undefined);
};
exports.checkIfConstraintsArePresent = checkIfConstraintsArePresent;
const isCheckbox = function (item) {
  const fieldType = (item === null || item === void 0 ? void 0 : item.fieldType) || (0, SchemaUtils_1.defaultFieldTypes)(item);
  return fieldType === 'checkbox';
};
exports.isCheckbox = isCheckbox;
const isCheckboxGroup = function (item) {
  const fieldType = (item === null || item === void 0 ? void 0 : item.fieldType) || (0, SchemaUtils_1.defaultFieldTypes)(item);
  return fieldType === 'checkbox-group';
};
exports.isCheckboxGroup = isCheckboxGroup;
const isDateField = function (item) {
  const fieldType = (item === null || item === void 0 ? void 0 : item.fieldType) || (0, SchemaUtils_1.defaultFieldTypes)(item);
  return fieldType === 'text-input' && (item === null || item === void 0 ? void 0 : item.format) === 'date' || fieldType === 'date-input';
};
exports.isDateField = isDateField;
function deepClone(obj, idGenerator) {
  let result;
  if (obj instanceof Array) {
    result = [];
    result = obj.map(x => deepClone(x, idGenerator));
  } else if (typeof obj === 'object' && obj !== null) {
    result = {};
    Object.entries(obj).forEach(_ref => {
      let [key, value] = _ref;
      result[key] = deepClone(value, idGenerator);
    });
  } else {
    result = obj;
  }
  if (idGenerator && result && result.id) {
    result.id = idGenerator();
  }
  return result;
}
exports.deepClone = deepClone;
function checkIfKeyAdded(currentObj, prevObj, objKey) {
  if (currentObj != null && prevObj != null) {
    const newPrvObj = Object.assign({}, prevObj);
    newPrvObj[objKey] = currentObj[objKey];
    const newJsonStr = (0, exports.jsonString)(currentObj).replace((0, exports.jsonString)(newPrvObj), '');
    return newJsonStr === '';
  } else {
    return false;
  }
}
exports.checkIfKeyAdded = checkIfKeyAdded;
const jsonString = obj => {
  return JSON.stringify(obj, null, 2);
};
exports.jsonString = jsonString;
const isRepeatable = obj => {
  return obj.repeatable && (obj.minOccur === undefined && obj.maxOccur === undefined || obj.minOccur !== undefined && obj.maxOccur !== undefined && obj.maxOccur !== 0 || obj.minOccur !== undefined && obj.maxOccur !== undefined && obj.minOccur !== 0 && obj.maxOccur !== 0 || obj.minOccur !== undefined && obj.minOccur >= 0 || obj.maxOccur !== undefined && obj.maxOccur !== 0) || false;
};
exports.isRepeatable = isRepeatable;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/SchemaUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/SchemaUtils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportDataSchema = exports.defaultFieldTypes = void 0;
const objToMap = o => new Map(Object.entries(o));
const stringViewTypes = objToMap({
  'date': 'date-input',
  'data-url': 'file-input',
  'binary': 'file-input'
});
const typeToViewTypes = objToMap({
  'number': 'number-input',
  'boolean': 'checkbox',
  'object': 'panel',
  'array': 'panel',
  'file': 'file-input',
  'file[]': 'file-input'
});
const arrayTypes = ['string[]', 'boolean[]', 'number[]', 'array'];
const defaultFieldTypes = schema => {
  const type = schema.type || 'string';
  if ('enum' in schema) {
    const enums = schema.enum;
    if (enums.length > 2 || arrayTypes.indexOf(type) > -1) {
      return 'drop-down';
    } else {
      return 'checkbox';
    }
  }
  if (type === 'string' || type === 'string[]') {
    return stringViewTypes.get(schema.format) || 'text-input';
  }
  return typeToViewTypes.get(type) || 'text-input';
};
exports.defaultFieldTypes = defaultFieldTypes;
const fieldSchema = input => {
  var _a;
  if ('items' in input) {
    const fieldset = input;
    const items = fieldset.items;
    if (fieldset.type === 'array') {
      return {
        type: 'array',
        items: fieldSchema(items[0]),
        minItems: fieldset === null || fieldset === void 0 ? void 0 : fieldset.minItems,
        maxItems: fieldset === null || fieldset === void 0 ? void 0 : fieldset.maxItems
      };
    } else {
      const iter = items.filter(x => x.name != null);
      return {
        type: 'object',
        properties: Object.fromEntries(iter.map(item => [item.name, fieldSchema(item)])),
        required: iter.filter(x => x.required).map(x => x.name)
      };
    }
  } else {
    const field = input;
    const schemaProps = ['type', 'maxLength', 'minLength', 'minimum', 'maximum', 'format', 'pattern', 'step', 'enum'];
    const schema = schemaProps.reduce((acc, prop) => {
      const p = prop;
      if (prop in field && field[p] != undefined) {
        acc[prop] = field[p];
      }
      return acc;
    }, {});
    if (field.dataRef === 'none' || Object.keys(schema).length == 0) {
      return undefined;
    }
    return Object.assign({
      title: (_a = field.label) === null || _a === void 0 ? void 0 : _a.value,
      description: field.description
    }, schema);
  }
};
const exportDataSchema = form => {
  return fieldSchema(form);
};
exports.exportDataSchema = exportDataSchema;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/TranslationUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/TranslationUtils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTranslationObject = exports.createTranslationObj = exports.getOrElse = exports.addTranslationId = exports.invalidateTranslation = exports.CUSTOM_PROPS_KEY = exports.TRANSLATION_ID = exports.TRANSLATION_TOKEN = void 0;
const index_1 = __webpack_require__(/*! ../types/index */ "./node_modules/@aemforms/af-core/lib/types/index.js");
exports.TRANSLATION_TOKEN = '##';
exports.TRANSLATION_ID = 'afs:translationIds';
exports.CUSTOM_PROPS_KEY = 'properties';
const defaultBcp47LangTags = ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT', 'ja-JP', 'ko-KR', 'pt-BR', 'zh-CN', 'zh-TW'];
const invalidateTranslation = (input, updates) => {
  index_1.translationProps.forEach(prop => {
    var _a, _b, _c, _d;
    if (prop in updates && ((_b = (_a = input === null || input === void 0 ? void 0 : input[exports.CUSTOM_PROPS_KEY]) === null || _a === void 0 ? void 0 : _a[exports.TRANSLATION_ID]) === null || _b === void 0 ? void 0 : _b[prop])) {
      (_d = (_c = input === null || input === void 0 ? void 0 : input[exports.CUSTOM_PROPS_KEY]) === null || _c === void 0 ? void 0 : _c[exports.TRANSLATION_ID]) === null || _d === void 0 ? true : delete _d[prop];
    }
  });
};
exports.invalidateTranslation = invalidateTranslation;
const addTranslationId = function (input) {
  let additionalTranslationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const model = input;
  const transProps = [...index_1.translationProps, ...additionalTranslationProps];
  _createTranslationId(model, '', transProps);
  return model;
};
exports.addTranslationId = addTranslationId;
const _createTranslationId = (input, path, transProps) => {
  Object.entries(input).forEach(_ref => {
    let [key, value] = _ref;
    if (typeof value == 'object') {
      if (input instanceof Array) {
        if (value && 'name' in value) {
          _createTranslationId(value, `${path === '' ? path : path + exports.TRANSLATION_TOKEN}${value.name}`, transProps);
        }
      } else {
        _createTranslationId(value, key === 'items' ? path : `${path === '' ? path : path + exports.TRANSLATION_TOKEN}${key}`, transProps);
      }
    } else {
      if (':type' in input || 'type' in input || 'fieldType' in input) {
        for (const transProp of transProps) {
          if ((0, exports.getOrElse)(input, transProp) != null) {
            if (!(exports.CUSTOM_PROPS_KEY in input)) {
              input[exports.CUSTOM_PROPS_KEY] = {};
            }
            if (!(exports.TRANSLATION_ID in input[exports.CUSTOM_PROPS_KEY])) {
              input[exports.CUSTOM_PROPS_KEY][exports.TRANSLATION_ID] = {};
            }
            if (!(transProp in input[exports.CUSTOM_PROPS_KEY][exports.TRANSLATION_ID])) {
              input[exports.CUSTOM_PROPS_KEY][exports.TRANSLATION_ID][transProp] = `${path}${exports.TRANSLATION_TOKEN}${transProp}${exports.TRANSLATION_TOKEN}${Math.floor(Math.random() * 10000) + 1}`;
            }
          }
        }
      }
    }
  });
};
const _createTranslationObj = (input, translationObj, translationProps) => {
  Object.values(input).forEach(value => {
    var _a, _b;
    if (typeof value == 'object') {
      _createTranslationObj(value, translationObj, translationProps);
    } else {
      for (const translationProp of translationProps) {
        const objValue = (0, exports.getOrElse)(input, translationProp);
        if (objValue && ((_b = (_a = input === null || input === void 0 ? void 0 : input[exports.CUSTOM_PROPS_KEY]) === null || _a === void 0 ? void 0 : _a[exports.TRANSLATION_ID]) === null || _b === void 0 ? void 0 : _b[translationProp])) {
          if (objValue instanceof Array) {
            objValue.forEach((item, index) => {
              if (typeof item === 'string') {
                translationObj[`${input[exports.CUSTOM_PROPS_KEY][exports.TRANSLATION_ID][translationProp]}${exports.TRANSLATION_TOKEN}${index}`] = item;
              }
            });
          } else {
            translationObj[`${input[exports.CUSTOM_PROPS_KEY][exports.TRANSLATION_ID][translationProp]}`] = objValue;
          }
        }
      }
    }
  });
};
const getOrElse = function (input, key) {
  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!key) {
    return defaultValue;
  }
  const arr = Array.isArray(key) ? key : key.split('.');
  let objValue = input,
    index = 0;
  while (index < arr.length && objValue.hasOwnProperty(arr[index])) {
    objValue = objValue[arr[index]];
    index++;
  }
  return index == arr.length ? objValue : defaultValue;
};
exports.getOrElse = getOrElse;
const createTranslationObj = function (input) {
  let additionalTranslationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const obj = {};
  const transProps = [...index_1.translationProps, ...additionalTranslationProps];
  _createTranslationObj(input, obj, transProps);
  return obj;
};
exports.createTranslationObj = createTranslationObj;
const createTranslationObject = function (input) {
  let additionalTranslationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let bcp47LangTags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const transProps = [...index_1.translationProps, ...additionalTranslationProps];
  const inputCopy = JSON.parse(JSON.stringify(input));
  const obj = (0, exports.createTranslationObj)((0, exports.addTranslationId)(inputCopy, additionalTranslationProps), transProps);
  const langTags = [...defaultBcp47LangTags, ...bcp47LangTags];
  const allLangs = {};
  for (const langTag of langTags) {
    allLangs[langTag] = JSON.parse(JSON.stringify(obj));
  }
  return [inputCopy, allLangs];
};
exports.createTranslationObject = createTranslationObject;

/***/ }),

/***/ "./node_modules/@aemforms/af-core/lib/utils/ValidationUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aemforms/af-core/lib/utils/ValidationUtils.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constraints = exports.ValidConstraints = exports.coerceType = void 0;
const FormUtils_1 = __webpack_require__(/*! ./FormUtils */ "./node_modules/@aemforms/af-core/lib/utils/FormUtils.js");
const FileObject_1 = __webpack_require__(/*! ../FileObject */ "./node_modules/@aemforms/af-core/lib/FileObject.js");
const dateRegex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInMonth = (leapYear, month) => {
  if (leapYear && month == 2) {
    return 29;
  }
  return days[month - 1];
};
const isLeapYear = year => {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
};
const coerceType = (param, type) => {
  let num;
  switch (type) {
    case 'string':
      return param + '';
    case 'number':
      num = +param;
      if (!isNaN(num)) {
        return num;
      }
      break;
    case 'boolean':
      if (typeof param === 'string') {
        return param === 'true';
      } else if (typeof param === 'number') {
        return param !== 0;
      }
  }
  throw `${param} has invalid type. Expected : ${type}, Actual ${typeof param}`;
};
exports.coerceType = coerceType;
const checkNumber = inputVal => {
  if (inputVal === '' || inputVal == null) {
    return {
      value: '',
      valid: true
    };
  }
  let value = parseFloat(inputVal);
  const valid = !isNaN(value);
  if (!valid) {
    value = inputVal;
  }
  return {
    value,
    valid
  };
};
const checkInteger = inputVal => {
  if (inputVal == '' || inputVal == null) {
    return {
      value: '',
      valid: true
    };
  }
  let value = parseFloat(inputVal);
  const valid = !isNaN(value) && Math.round(value) === value;
  if (!valid) {
    value = inputVal;
  }
  return {
    value,
    valid
  };
};
const toArray = inputVal => {
  if (inputVal != null && !(inputVal instanceof Array)) {
    return [inputVal];
  }
  return inputVal;
};
const checkBool = inputVal => {
  const valid = typeof inputVal === 'boolean' || inputVal === 'true' || inputVal === 'false';
  const value = typeof inputVal === 'boolean' ? inputVal : valid ? inputVal === 'true' : inputVal;
  return {
    valid,
    value
  };
};
const checkFile = inputVal => {
  const value = (0, FormUtils_1.extractFileInfo)(inputVal);
  const valid = value !== null;
  return {
    value: valid ? value : inputVal,
    valid
  };
};
const matchMediaType = (mediaType, accepts) => {
  return !mediaType || accepts.some(accept => {
    const trimmedAccept = accept.trim();
    const prefixAccept = trimmedAccept.split('/')[0];
    const suffixAccept = trimmedAccept.split('.')[1];
    return trimmedAccept.includes('*') && mediaType.startsWith(prefixAccept) || trimmedAccept.includes('.') && mediaType.endsWith(suffixAccept) || trimmedAccept === mediaType;
  });
};
const partitionArray = (inputVal, validatorFn) => {
  const value = toArray(inputVal);
  if (value == null) {
    return [[], [value]];
  }
  return value.reduce((acc, x) => {
    if (acc[1].length == 0) {
      const r = validatorFn(x);
      const index = r.valid ? 0 : 1;
      acc[index].push(r.value);
    }
    return acc;
  }, [[], []]);
};
exports.ValidConstraints = {
  date: ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum', 'format'],
  string: ['minLength', 'maxLength', 'pattern'],
  number: ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'],
  array: ['minItems', 'maxItems', 'uniqueItems'],
  file: ['accept', 'maxFileSize']
};
exports.Constraints = {
  type: (constraint, inputVal) => {
    let value = inputVal;
    if (inputVal == undefined) {
      return {
        valid: true,
        value: inputVal
      };
    }
    let valid = true,
      res;
    switch (constraint) {
      case 'string':
        valid = true;
        value = inputVal.toString();
        break;
      case 'string[]':
        value = toArray(inputVal);
        break;
      case 'number':
        res = checkNumber(inputVal);
        value = res.value;
        valid = res.valid;
        break;
      case 'boolean':
        res = checkBool(inputVal);
        valid = res.valid;
        value = res.value;
        break;
      case 'integer':
        res = checkInteger(inputVal);
        valid = res.valid;
        value = res.value;
        break;
      case 'integer[]':
        res = partitionArray(inputVal, checkInteger);
        valid = res[1].length === 0;
        value = valid ? res[0] : inputVal;
        break;
      case 'file':
        res = checkFile(inputVal instanceof Array ? inputVal[0] : inputVal);
        valid = res.valid;
        value = res.value;
        break;
      case 'file[]':
        res = partitionArray(inputVal, checkFile);
        valid = res[1].length === 0;
        value = valid ? res[0] : inputVal;
        break;
      case 'number[]':
        res = partitionArray(inputVal, checkNumber);
        valid = res[1].length === 0;
        value = valid ? res[0] : inputVal;
        break;
      case 'boolean[]':
        res = partitionArray(inputVal, checkBool);
        valid = res[1].length === 0;
        value = valid ? res[0] : inputVal;
        break;
    }
    return {
      valid,
      value
    };
  },
  format: (constraint, input) => {
    let valid = true;
    const value = input;
    if (input === null) {
      return {
        value,
        valid
      };
    }
    let res;
    switch (constraint) {
      case 'date':
        res = dateRegex.exec((input || '').trim());
        if (res != null) {
          const [match, year, month, date] = res;
          const [nMonth, nDate] = [+month, +date];
          const leapYear = isLeapYear(+year);
          valid = nMonth >= 1 && nMonth <= 12 && nDate >= 1 && nDate <= daysInMonth(leapYear, nMonth);
        } else {
          valid = false;
        }
        break;
      case 'data-url':
        valid = true;
        break;
    }
    return {
      valid,
      value
    };
  },
  minimum: (constraint, value) => {
    return {
      valid: value >= constraint,
      value
    };
  },
  maximum: (constraint, value) => {
    return {
      valid: value <= constraint,
      value
    };
  },
  exclusiveMinimum: (constraint, value) => {
    return {
      valid: value > constraint,
      value
    };
  },
  exclusiveMaximum: (constraint, value) => {
    return {
      valid: value < constraint,
      value
    };
  },
  minItems: (constraint, value) => {
    return {
      valid: value instanceof Array && value.length >= constraint,
      value
    };
  },
  maxItems: (constraint, value) => {
    return {
      valid: value instanceof Array && value.length <= constraint,
      value
    };
  },
  uniqueItems: (constraint, value) => {
    return {
      valid: !constraint || value instanceof Array && value.length === new Set(value).size,
      value
    };
  },
  minLength: (constraint, value) => {
    return Object.assign(Object.assign({}, exports.Constraints.minimum(constraint, typeof value === 'string' ? value.length : 0)), {
      value
    });
  },
  maxLength: (constraint, value) => {
    return Object.assign(Object.assign({}, exports.Constraints.maximum(constraint, typeof value === 'string' ? value.length : 0)), {
      value
    });
  },
  pattern: (constraint, value) => {
    let regex;
    if (typeof constraint === 'string') {
      regex = new RegExp(constraint);
    } else {
      regex = constraint;
    }
    return {
      valid: regex.test(value),
      value
    };
  },
  required: (constraint, value) => {
    const valid = constraint ? value != null && value !== '' : true;
    return {
      valid,
      value
    };
  },
  enum: (constraint, value) => {
    return {
      valid: constraint.indexOf(value) > -1,
      value
    };
  },
  accept: (constraint, value) => {
    if (!constraint || constraint.length === 0 || value === null || value === undefined) {
      return {
        valid: true,
        value
      };
    }
    const tempValue = value instanceof Array ? value : [value];
    const invalidFile = tempValue.some(file => !matchMediaType(file.type, constraint));
    return {
      valid: !invalidFile,
      value
    };
  },
  maxFileSize: (constraint, value) => {
    const sizeLimit = typeof constraint === 'string' ? (0, FormUtils_1.getFileSizeInBytes)(constraint) : constraint;
    return {
      valid: !(value instanceof FileObject_1.FileObject) || value.size <= sizeLimit,
      value
    };
  }
};

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/component/AdaptiveForm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/component/AdaptiveForm.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const FormContext_1 = __importDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/@aemforms/af-react-renderer/lib/component/FormContext.js"));
const af_core_1 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const react_intl_1 = __webpack_require__(/*! react-intl */ "react-intl");
// quarry intl is not working with react-intl formatMessage
const i18n_1 = __webpack_require__(/*! ./i18n */ "./node_modules/@aemforms/af-react-renderer/lib/component/i18n.js");
// @ts-ignore
const package_json_1 = __importDefault(__webpack_require__(/*! ../../package.json */ "./node_modules/@aemforms/af-react-renderer/package.json"));
const i18n_json_1 = __importDefault(__webpack_require__(/*! ../i18n.json */ "./node_modules/@aemforms/af-react-renderer/lib/i18n.json"));
const hooks_1 = __webpack_require__(/*! ../hooks */ "./node_modules/@aemforms/af-react-renderer/lib/hooks/index.js");
const eim_1 = __importDefault(__webpack_require__(/*! ../eim */ "./node_modules/@aemforms/af-react-renderer/lib/eim.js"));
const AdaptiveForm = function (props) {
  var _a;
  const {
    formJson,
    mappings,
    locale,
    localizationMessages,
    onInitialize,
    focusOn,
    loggerType = 'error'
  } = props;
  const [state, setState] = (0, react_1.useState)(null);
  //  this gets updated to new value on every rerender.
  //  using JSON.stringify to convert object to string and storing it in usePrevious
  const prevFormJsonStr = (0, hooks_1.usePrevious)((0, af_core_1.jsonString)(formJson));
  const [refMap] = (0, react_1.useState)({});
  if (localizationMessages) {
    // not using useMemo hook because createForm call is already optimized
    // any expensive react operation should generally be inside useMemo
    // todo: the input to defineMessages react-intl API could come from a restful end point
    (0, react_intl_1.defineMessages)((0, i18n_1.getTranslationMessages)(formJson));
  }
  let localeDictJson = localizationMessages;
  let localizationMessagesProp;
  if (typeof localizationMessages === 'string') {
    try {
      // if messages are in incorrect format, just log an error
      localeDictJson = JSON.parse(localizationMessages);
    } catch (ex) {
      console.log('Translation messages are in incorrect format');
      localeDictJson = localizationMessages;
    }
  }
  let afLocalization = Object.assign({}, i18n_json_1.default);
  if (locale) {
    localizationMessagesProp = localeDictJson === null || localeDictJson === void 0 ? void 0 : localeDictJson[locale];
    if (localizationMessagesProp) {
      afLocalization = (afLocalization === null || afLocalization === void 0 ? void 0 : afLocalization[locale]) || {};
      localizationMessagesProp = Object.assign(Object.assign({}, localizationMessagesProp), afLocalization);
    }
  }
  (0, eim_1.default)(package_json_1.default.version);
  // this logs event only if used inside unified shell
  // name aligns to the string used in quarry external docs
  (0, react_1.useEffect)(() => {
    // @ts-ignore
    let prevFormJson = prevFormJsonStr ? JSON.parse(prevFormJsonStr) : undefined;
    const isOnlyDataAdded = (0, af_core_1.checkIfKeyAdded)(formJson, prevFormJson, 'data');
    // useEffect gets called even if there is no change in formJson, hence adding an explicit check here
    // @ts-ignore
    const shouldNewModelBeCreated = isOnlyDataAdded && (0, af_core_1.jsonString)(formJson === null || formJson === void 0 ? void 0 : formJson.data) !== (0, af_core_1.jsonString)(prevFormJson === null || prevFormJson === void 0 ? void 0 : prevFormJson.data) || !isOnlyDataAdded;
    // @ts-ignore
    try {
      const form = shouldNewModelBeCreated ? (0, af_core_1.createFormInstance)(formJson, () => {}, loggerType, isOnlyDataAdded ? state === null || state === void 0 ? void 0 : state.model : null) : state === null || state === void 0 ? void 0 : state.model;
      if (typeof onInitialize === 'function') {
        onInitialize({
          type: 'initialize',
          // @ts-ignore
          target: form,
          payload: undefined,
          metadata: undefined,
          isCustomEvent: false
        });
      }
      if (!isOnlyDataAdded) {
        // initialize all the event handlers
        Object.keys(props).map(propKey => {
          if (propKey.startsWith('on') && propKey !== 'onInitialize' && typeof props[propKey] === 'function') {
            // get the event name from the function
            let eventName = propKey.substring(propKey.indexOf('on') + 2);
            eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
            // subscribe to the event
            // @ts-ignore
            form.subscribe(action => {
              props[propKey](action);
            }, eventName);
          }
        });
        // @ts-ignore
        const localState = {
          model: form,
          id: form.getUniqueId()
        };
        // @ts-ignore
        setState(localState);
      }
    } catch (e) {
      console.error('unable to create Form. Please validate the json');
    }
  }, [formJson]);
  if (focusOn && refMap[focusOn]) {
    refMap[focusOn].setFocus();
  }
  const formState = (_a = state === null || state === void 0 ? void 0 : state.model) === null || _a === void 0 ? void 0 : _a.getState();
  const Comp = mappings.form;
  return state && formState ?
  // @ts-ignore
  react_1.default.createElement(FormContext_1.default.Provider, {
    value: {
      mappings,
      form: state.model,
      modelId: state.id,
      refMap: refMap
    }
  }, react_1.default.createElement(react_intl_1.IntlProvider, {
    onError: () => {},
    locale: locale,
    messages: localizationMessagesProp
  }, Comp ? react_1.default.createElement(Comp, Object.assign({
    key: formState.id + '__' + state.id
  }, formState)) : null)) : null;
};
exports.default = AdaptiveForm;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/component/FormContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/component/FormContext.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
//@ts-ignore
const FormContext = react_1.default.createContext({});
exports.default = FormContext;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/component/i18n.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/component/i18n.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslationMessages = void 0;
const af_core_1 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const af_core_2 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const getTranslationMessages = input => {
  return Object.keys(input).reduce((acc, curr) => {
    const objValue = input[curr];
    let ret = null;
    if (objValue && objValue instanceof Object) {
      ret = (0, exports.getTranslationMessages)(objValue);
    } else if (objValue && objValue instanceof Array) {
      ret = (0, exports.getTranslationMessages)(objValue[0]);
    } else {
      const f1 = input;
      if (af_core_2.CUSTOM_PROPS_KEY in f1 && typeof f1[af_core_2.CUSTOM_PROPS_KEY] === 'object' && af_core_2.TRANSLATION_ID in f1[af_core_2.CUSTOM_PROPS_KEY]) {
        let idObj = f1[af_core_2.CUSTOM_PROPS_KEY][af_core_2.TRANSLATION_ID];
        ret = af_core_1.translationProps.reduce((a, prop) => {
          let localRet = {};
          // only if value exists, add to translation object
          if (f1[prop] && idObj[prop]) {
            // in case of array, add each properties in the translation object
            // for example, enumNames and enum
            if (f1[prop] instanceof Array) {
              f1[prop].forEach((item, index) => {
                let key = `${idObj[prop]}${af_core_2.TRANSLATION_TOKEN}${index}`;
                // @ts-ignore
                localRet[key] = {
                  'id': key,
                  'defaultMessage': item
                };
              });
            } else {
              let key = idObj[prop];
              // @ts-ignore
              localRet[key] = {
                'id': key,
                'defaultMessage': f1[prop]
              };
            }
          }
          return Object.assign(a, localRet);
        }, {});
      }
    }
    return Object.assign(acc, ret);
  }, {});
};
exports.getTranslationMessages = getTranslationMessages;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/eim.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/eim.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function eimProvider(version) {}
exports.default = eimProvider;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/hooks/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/hooks/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
__exportStar(__webpack_require__(/*! ./useRuleEngine */ "./node_modules/@aemforms/af-react-renderer/lib/hooks/useRuleEngine.js"), exports);
__exportStar(__webpack_require__(/*! ./useRenderer */ "./node_modules/@aemforms/af-react-renderer/lib/hooks/useRenderer.js"), exports);

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/hooks/useRenderer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/hooks/useRenderer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRenderer = exports.useFormIntl = exports.translateMessage = void 0;
const af_core_1 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_intl_1 = __webpack_require__(/*! react-intl */ "react-intl");
const useRuleEngine_1 = __webpack_require__(/*! ./useRuleEngine */ "./node_modules/@aemforms/af-react-renderer/lib/hooks/useRuleEngine.js");
const translateMessage = (obj, formatMessage) => propName => {
  var _a, _b, _c, _d;
  // todo: need to handle enumNames in a special manner here
  let value = (0, af_core_1.getOrElse)(obj, propName);
  if ((_b = (_a = obj === null || obj === void 0 ? void 0 : obj[af_core_1.CUSTOM_PROPS_KEY]) === null || _a === void 0 ? void 0 : _a[af_core_1.TRANSLATION_ID]) === null || _b === void 0 ? void 0 : _b[propName]) {
    let identifier = (_d = (_c = obj === null || obj === void 0 ? void 0 : obj[af_core_1.CUSTOM_PROPS_KEY]) === null || _c === void 0 ? void 0 : _c[af_core_1.TRANSLATION_ID]) === null || _d === void 0 ? void 0 : _d[propName];
    if (value instanceof Array) {
      value = value.map((x, index) => {
        let tempId = `${identifier}${af_core_1.TRANSLATION_TOKEN}${index}`;
        let temp = formatMessage({
          'id': tempId
        });
        return temp === tempId ? x : temp;
      });
    } else {
      value = value ? formatMessage({
        'id': identifier
      }) : '';
      // if id is the value, fall back to the original value
      if (value === identifier) {
        value = (0, af_core_1.getOrElse)(obj, propName);
      }
    }
  }
  return value;
};
exports.translateMessage = translateMessage;
const useFormIntl = function () {
  let obj;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    obj = (0, react_intl_1.useIntl)();
  } catch (e) {
    console.warn('Use Intl Failed. Localization would not work');
    obj = {
      formatMessage: a => {
        return a;
      }
    };
  }
  return obj;
};
exports.useFormIntl = useFormIntl;
/**
 * Binds the component to the Form element whose state is being provided
 * @param formFieldState  The state of the Field received from Adaptive Form Component
 * @param propsMapper Mapping Field State to Props of the component
 * @param Component The component to render.
 * @param wrap
 */
const useRenderer = function (formFieldState, Component) {
  let propsMapper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : a => a;
  let wrap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const [state, handlers] = (0, useRuleEngine_1.useRuleEngine)(formFieldState);
  const i18n = (0, exports.useFormIntl)();
  const [ref] = (0, useRuleEngine_1.useFocus)(formFieldState);
  const res = propsMapper(state, handlers, (0, exports.translateMessage)(state, i18n.formatMessage));
  return wrap ? react_1.default.createElement("div", {
    className: 'field'
  }, react_1.default.createElement(Component, Object.assign({}, res, {
    ref: ref
  }))) : react_1.default.createElement(Component, Object.assign({}, res, {
    ref: ref
  }));
};
exports.useRenderer = useRenderer;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/hooks/useRuleEngine.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/hooks/useRuleEngine.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = exports.useFocus = exports.useRuleEngine = void 0;
const FormContext_1 = __importDefault(__webpack_require__(/*! ../component/FormContext */ "./node_modules/@aemforms/af-react-renderer/lib/component/FormContext.js"));
const react_1 = __webpack_require__(/*! react */ "react");
//@ts-ignore
const af_core_1 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const af_core_2 = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
const af_formatters_1 = __webpack_require__(/*! @aemforms/af-formatters */ "@aemforms/af-formatters");
/**
 * Binds the component's state to the Form and dynamically changing it depending upon
 * the rules written for that Field in the Form
 * @param props
 * @param supportFormats
 */
const useRuleEngine = function (props) {
  let supportFormats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _a;
  const context = (0, react_1.useContext)(FormContext_1.default);
  const id = props.id;
  const element = (_a = context.form) === null || _a === void 0 ? void 0 : _a.getElement(id);
  // use the state, if an empty controller (like objects outside of form vocab), fallback to props
  const [elementState, setElementState] = (0, react_1.useState)((element === null || element === void 0 ? void 0 : element.getState()) || props);
  const [isInFocus, setInFocus] = (0, react_1.useState)(false);
  (0, react_1.useEffect)(() => {
    const subscription = element === null || element === void 0 ? void 0 : element.subscribe(e => {
      const state = e.target.getState();
      setElementState(state);
    });
    return () => {
      subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
    };
  }, [id]);
  (0, react_1.useEffect)(() => {
    const items = (element === null || element === void 0 ? void 0 : element.items) || [];
    const subscriptions = items === null || items === void 0 ? void 0 : items.map(item => {
      var _a;
      const childElement = (_a = context.form) === null || _a === void 0 ? void 0 : _a.getElement(item.id);
      return childElement === null || childElement === void 0 ? void 0 : childElement.subscribe(e => {
        var _a;
        const changes = ((_a = e === null || e === void 0 ? void 0 : e.payload) === null || _a === void 0 ? void 0 : _a.changes) || [];
        let isChanged = changes.filter(_ref => {
          let {
            propertyName
          } = _ref;
          return propertyName === 'enabled' || propertyName === 'visible';
        }).length;
        if (isChanged) {
          setElementState(element === null || element === void 0 ? void 0 : element.getState());
        }
      });
    });
    return () => {
      subscriptions.forEach(subscription => {
        subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
      });
    };
  }, [id]);
  const pad2Digits = num => num < 10 ? `0${num}` : `${num}`;
  const pad4Digits = num => num > 999 ? `${num}` : ['0', '00', '000'][4 - `${num}`.length] + num;
  const dispatchChange = val => {
    if (!(element === null || element === void 0 ? void 0 : element.isContainer)) {
      console.log('changed ' + val);
      //@ts-ignore
      //supporting editFormat only for dates now
      if (supportFormats && val != null && element.editFormat && element.format === 'date') {
        //@ts-ignore
        const parsedVal = (0, af_formatters_1.parse)(val.toString(), element.language, element.editFormat, null, false);
        console.log('parsed ' + parsedVal);
        if (parsedVal instanceof Date) {
          element.value = pad4Digits(parsedVal.getFullYear()) + '-' + pad2Digits(parsedVal.getMonth() + 1) + '-' + pad2Digits(parsedVal.getDate());
        } else {
          element.value = parsedVal;
        }
        console.log('model ' + element.value);
      } else {
        element.value = val;
      }
    }
  };
  const dispatchBlur = () => {
    if (!(element === null || element === void 0 ? void 0 : element.isContainer)) {
      console.log('Blur');
      const blurAction = new af_core_2.Blur(null);
      setInFocus(false);
      element === null || element === void 0 ? void 0 : element.dispatch(blurAction);
    }
  };
  const dispatchClick = () => {
    const clickAction = new af_core_1.Click(null);
    element === null || element === void 0 ? void 0 : element.dispatch(clickAction);
  };
  const dispatchFocus = () => {
    setInFocus(true);
    element === null || element === void 0 ? void 0 : element.dispatch(new af_core_1.Focus());
  };
  const dispatchAddItem = n => {
    const action = new af_core_1.AddItem(n);
    element === null || element === void 0 ? void 0 : element.dispatch(action);
  };
  const dispatchRemoveItem = n => {
    const action = new af_core_1.RemoveItem(n);
    element === null || element === void 0 ? void 0 : element.dispatch(action);
  };
  //@ts-ignore
  return [Object.assign(Object.assign({}, elementState), {
    isInFocus
  }), {
    dispatchChange,
    dispatchClick,
    dispatchAddItem,
    dispatchRemoveItem,
    dispatchBlur,
    dispatchFocus
  }];
};
exports.useRuleEngine = useRuleEngine;
// @ts-ignore
const useFocus = function (props) {
  const context = (0, react_1.useContext)(FormContext_1.default);
  const id = props.id;
  const ref = (0, react_1.useRef)(null);
  const setRef = (0, react_1.useCallback)(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }
    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }
    // Save a reference to the node
    ref.current = node;
  }, []);
  const setFocus = function () {
    // @ts-ignore
    ref.current && ref.current.focus();
  };
  if (context === null || context === void 0 ? void 0 : context.refMap) {
    context.refMap[id] = {
      'setFocus': setFocus
    };
  }
  return [setRef, setFocus];
};
exports.useFocus = useFocus;
/**
 * React hook to get the previous state
 * @param value
 */
const usePrevious = function (value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = (0, react_1.useRef)();
  // Store current value in ref
  (0, react_1.useEffect)(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
exports.usePrevious = usePrevious;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/i18n.json":
/*!****************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/i18n.json ***!
  \****************************************************************/
/*! exports provided: de-DE, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"de-DE\":{\"defaultErrorMessage\":\"Das Feld enthÃ¤lt einen Fehler\"},\"en-US\":{\"defaultErrorMessage\":\"There is an error in the field\"},\"es-ES\":{\"defaultErrorMessage\":\"Hay un error en el campo\"},\"fr-FR\":{\"defaultErrorMessage\":\"Il y a une erreur dans le champ\"},\"it-IT\":{\"defaultErrorMessage\":\"Il campo contiene un errore\"},\"ja-JP\":{\"defaultErrorMessage\":\"ãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã«ã‚¨ãƒ©ãƒ¼ãŒã‚ã‚Šã¾ã™\"},\"ko-KR\":{\"defaultErrorMessage\":\"í•„ë“œì— ì˜¤ë¥˜ê°€ ìžˆìŠµë‹ˆë‹¤\"},\"pt-BR\":{\"defaultErrorMessage\":\"HÃ¡ um erro no campo\"},\"zh-CN\":{\"defaultErrorMessage\":\"å­—æ®µä¸­æœ‰é”™\"},\"zh-TW\":{\"defaultErrorMessage\":\"æ¬„ä½å‡ºç¾éŒ¯èª¤\"}}");

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = exports.useRuleEngine = exports.useRenderer = exports.useFormIntl = exports.EmptyRenderer = exports.getRenderer = exports.renderChildren = exports.AdaptiveForm = void 0;
const AdaptiveForm_1 = __importDefault(__webpack_require__(/*! ./component/AdaptiveForm */ "./node_modules/@aemforms/af-react-renderer/lib/component/AdaptiveForm.js"));
exports.AdaptiveForm = AdaptiveForm_1.default;
const FormContext_1 = __importDefault(__webpack_require__(/*! ./component/FormContext */ "./node_modules/@aemforms/af-react-renderer/lib/component/FormContext.js"));
exports.FormContext = FormContext_1.default;
const renderChildren_1 = __webpack_require__(/*! ./renderChildren */ "./node_modules/@aemforms/af-react-renderer/lib/renderChildren.js");
Object.defineProperty(exports, "renderChildren", {
  enumerable: true,
  get: function () {
    return renderChildren_1.renderChildren;
  }
});
Object.defineProperty(exports, "getRenderer", {
  enumerable: true,
  get: function () {
    return renderChildren_1.getRenderer;
  }
});
Object.defineProperty(exports, "EmptyRenderer", {
  enumerable: true,
  get: function () {
    return renderChildren_1.EmptyRenderer;
  }
});
const index_1 = __webpack_require__(/*! ./hooks/index */ "./node_modules/@aemforms/af-react-renderer/lib/hooks/index.js");
Object.defineProperty(exports, "useRenderer", {
  enumerable: true,
  get: function () {
    return index_1.useRenderer;
  }
});
Object.defineProperty(exports, "useRuleEngine", {
  enumerable: true,
  get: function () {
    return index_1.useRuleEngine;
  }
});
Object.defineProperty(exports, "useFormIntl", {
  enumerable: true,
  get: function () {
    return index_1.useFormIntl;
  }
});

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/lib/renderChildren.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/lib/renderChildren.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChildren = exports.getRenderer = exports.EmptyRenderer = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const EmptyRenderer = node => {
  console.error('undefined fieldtype', node);
  return null;
};
exports.EmptyRenderer = EmptyRenderer;
const getRenderer = (node, mappings) => {
  let Comp;
  if (':type' in node) {
    Comp = mappings === null || mappings === void 0 ? void 0 : mappings[node[':type']];
  }
  if (Comp == undefined && 'fieldType' in node) {
    Comp = mappings === null || mappings === void 0 ? void 0 : mappings[node.fieldType];
  }
  if (Comp === undefined) {
    Comp = exports.EmptyRenderer;
  }
  return Comp;
};
exports.getRenderer = getRenderer;
const renderChildren = function (props, mappings, modelId, handlers) {
  const items = props.items;
  const maxItems = props.maxItems;
  const minItems = props.minItems;
  if (typeof items === 'object') {
    const children = props.items;
    return children.map(child => {
      const Comp = (0, exports.getRenderer)(child, mappings);
      //@ts-ignore
      const addRequired = maxItems == -1 || items.length < maxItems;
      //@ts-ignore
      const removeRequired = items.length > minItems;
      const addRemoveRequired = addRequired || removeRequired;
      const Repeater = mappings.repeater;
      {
        return addRemoveRequired && Repeater !== undefined ? react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(Repeater, {
          add: addRequired,
          remove: removeRequired,
          index: child.index,
          handlers: handlers
        }), react_1.default.createElement(Comp, Object.assign({
          key: child.id + '__' + modelId
        }, child))) : react_1.default.createElement(Comp, Object.assign({
          key: child.id + '__' + modelId
        }, child));
      }
    });
  } else {
    return [];
  }
};
exports.renderChildren = renderChildren;

/***/ }),

/***/ "./node_modules/@aemforms/af-react-renderer/package.json":
/*!***************************************************************!*\
  !*** ./node_modules/@aemforms/af-react-renderer/package.json ***!
  \***************************************************************/
/*! exports provided: name, version, description, author, license, main, directories, jest-junit, files, publishConfig, scripts, optionalDependencies, dependencies, peerDependencies, devDependencies, _resolved, _integrity, _from, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@aemforms/af-react-renderer\",\"version\":\"0.22.35\",\"description\":\"React Hooks to add business logic to React Components\",\"author\":\"Adobe Systems\",\"license\":\"Adobe Proprietary\",\"main\":\"lib/index.js\",\"directories\":{\"lib\":\"lib\",\"test\":\"__tests__\"},\"jest-junit\":{\"suiteName\":\"component tests\",\"suiteNameTemplate\":\"{filename}\",\"classNameTemplate\":\"component-test.{filename}\",\"outputDirectory\":\"./target/test-reports\"},\"files\":[\"lib\",\"LICENSE\"],\"publishConfig\":{\"access\":\"public\"},\"scripts\":{\"clean\":\"rm -rf lib target\",\"eslint\":\"npx eslint src/**/*.tsx\",\"build\":\"npm run clean && npm run eslint && npx tsc\",\"test:ci\":\"jest --silent --coverage\",\"prepublishOnly\":\"npm run build && npm run test\",\"test\":\"jest --silent\"},\"optionalDependencies\":{\"@adobe/exc-app\":\"^1.0.5\"},\"dependencies\":{\"@aemforms/af-core\":\"^0.22.35\",\"@aemforms/af-formatters\":\"^0.22.35\"},\"peerDependencies\":{\"react\":\"^16.14.0 || ^17.0.2\",\"react-dom\":\"^16.14.0 || ^17.0.2\",\"react-intl\":\"^5.8.4\"},\"devDependencies\":{\"@adobe/exc-app\":\"^1.0.5\",\"@babel/preset-env\":\"^7.20.2\",\"@testing-library/dom\":\"^8.1.0\",\"@testing-library/react\":\"^12.0.0\",\"@testing-library/react-hooks\":\"^7.0.1\",\"@testing-library/user-event\":\"^13.2.1\",\"@types/jest\":\"^27.5.1\",\"@types/react\":\"^17.0.14\",\"@types/react-dom\":\"^17.0.9\",\"@types/react-test-renderer\":\"^17.0.1\",\"@types/sanitize-html\":\"^2.3.2\",\"@typescript-eslint/eslint-plugin\":\"^4.28.2\",\"@typescript-eslint/parser\":\"^4.28.2\",\"babel-jest\":\"^26.6.3\",\"eslint\":\"^7.30.0\",\"eslint-config-standard\":\"^16.0.3\",\"eslint-plugin-import\":\"^2.23.4\",\"eslint-plugin-jest\":\"^24.3.6\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^5.1.0\",\"eslint-plugin-react-hooks\":\"^4.2.0\",\"jest\":\"^27.5.1\",\"jest-junit\":\"^12.2.0\",\"react\":\"^17.0.2\",\"react-dom\":\"^17.0.2\",\"react-intl\":\"^5.8.4\",\"react-test-renderer\":\"^17.0.2\",\"ts-jest\":\"^27.1.4\",\"typescript\":\"^4.3.5\"},\"_resolved\":\"https://registry.npmjs.org/@aemforms/af-react-renderer/-/af-react-renderer-0.22.35.tgz\",\"_integrity\":\"sha512-UMbM6fbZTlyZiST4oR+Vy6ccfypwUxVFM4v/6icjhBNyKtxdkrnAJoPAzxRTXAZAzm7ISVPlgCGoAT4l2hBDiw==\",\"_from\":\"@aemforms/af-react-renderer@0.22.35\"}");

/***/ }),

/***/ "./node_modules/babel-plugin-universal-import/universalImport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-universal-import/universalImport.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable */

module.exports = function (config, makeThennable) {
  if (makeThennable === false) return config;
  var load = config.load;
  config.then = function (cb) {
    return load().then(function (res) {
      return cb && cb(res);
    });
  };
  config.catch = function (cb) {
    return load().catch(function (e) {
      return cb && cb(e);
    });
  };
  return config;
};
var isSet = false;
function setHasPlugin() {
  if (isSet) return;
  var universal;
  var isWebpack = typeof __webpack_require__ !== 'undefined';
  try {
    if (isWebpack) {
      var weakId = /*require.resolve*/(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js");
      universal = __webpack_require__(weakId);
    } else {
      var nodeRequire = typeof require === 'undefined' ? module.require : require;
      universal = nodeRequire('react-universal-component');
    }
    if (universal) {
      universal.setHasBabelPlugin();
      isSet = true;
    }
  } catch (e) {}
}
setHasPlugin();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);
      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }
      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names

  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }
      list.push(item);
    }
  };
  return list;
};
function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }
  return [content].join('\n');
} // Adapted from convert-source-map (MIT)

function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/react-universal-component/dist/context.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/context.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(/*! react */ "react");
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var ReportContext = _react2.default.createContext({
  report: function report() {}
});
exports.default = ReportContext;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;
var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _index = __webpack_require__(/*! ./index */ "./node_modules/react-universal-component/dist/index.js");
var _index2 = _interopRequireDefault(_index);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;
  if (!state.error) {
    state.error = null;
  }
  return __handleAfter(props, state, isMount, isSync, isServer);
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */
var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
    error = state.error;
  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true
    });
    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }
  return state;
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _requireUniversalModule = __webpack_require__(/*! ./requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js");
Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});
var _reportChunks = __webpack_require__(/*! ./report-chunks */ "./node_modules/react-universal-component/dist/report-chunks.js");
Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});
exports.default = universal;
var _react = __webpack_require__(/*! react */ "react");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);
var _context = __webpack_require__(/*! ./context */ "./node_modules/react-universal-component/dist/context.js");
var _context2 = _interopRequireDefault(_context);
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-universal-component/dist/utils.js");
var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-universal-component/dist/helpers.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var hasBabelPlugin = false;
var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (false)
  );
};
var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};
function universal(asyncModule) {
  var _class, _temp;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userRender = opts.render,
    _opts$loading = opts.loading,
    Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
    _opts$error = opts.error,
    Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
    _opts$minDelay = opts.minDelay,
    minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
    _opts$alwaysDelay = opts.alwaysDelay,
    alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
    _opts$testBabelPlugin = opts.testBabelPlugin,
    testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
    _opts$loadingTransiti = opts.loadingTransition,
    loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
    options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);
  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);
    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;
        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }
          _this2.update(state, isMount);
        }).catch(function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
          error = state.error;
        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }
        this.setState(state);
      }
      // $FlowFixMe
    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
          addModule = _req.addModule,
          requireSync = _req.requireSync,
          requireAsync = _req.requireAsync,
          asyncOnly = _req.asyncOnly;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }
        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)
        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }
        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }
        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};
        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
          requireAsync = _req2.requireAsync,
          requireSync = _req2.requireSync;
        var mod = void 0;
        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }
        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};
        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
          requireSync = _req3.requireSync;
        var mod = requireSync(props);
        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }
        return mod;
      }
    }]);
    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);
      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));
      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };
      _this.state = _this.init(_this.props);
      // $FlowFixMe
      _this.state.error = null;
      return _this;
    }
    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;
        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps),
            requireSync = _req4.requireSync,
            requireAsync = _req4.requireAsync,
            shouldUpdate = _req4.shouldUpdate;
          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;
            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }
            this.handleBefore(false, !!mod);
            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }
            var state = {
              mod: mod
            };
            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }
            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
          isLoading = _props.isLoading,
          userError = _props.error,
          props = _objectWithoutProperties(_props, ['isLoading', 'error']);
        var _state = this.state,
          mod = _state.mod,
          error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props),
          requireSync = _req5.requireSync,
          shouldUpdate = _req5.shouldUpdate;
        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }
        return null;
      }
    }]);
    return UniversalComponent;
  }(_react2.default.Component), _class.contextType = _context2.default, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-universal-component/dist/report-chunks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/report-chunks.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = __webpack_require__(/*! react */ "react");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _context = __webpack_require__(/*! ./context */ "./node_modules/react-universal-component/dist/context.js");
var _context2 = _interopRequireDefault(_context);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);
  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);
    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));
    _this.state = {
      report: props.report
    };
    return _this;
  }
  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_context2.default.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return ReportChunks;
}(_react2.default.Component);
ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$":
/*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index.js": "./node_modules/react-universal-component/dist/requireById/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$";

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-universal-component/dist/utils.js");
var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__("./node_modules/react-universal-component/dist/requireById sync recursive ^.*$")("" + id);
  }
  return __webpack_require__('' + id);
};
exports.default = requireById;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireUniversalModule.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireUniversalModule.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
exports.default = requireUniversalModule;
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-universal-component/dist/utils.js");
var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();
function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
    _options$timeout = options.timeout,
    timeout = _options$timeout === undefined ? 15000 : _options$timeout,
    onLoad = options.onLoad,
    onError = options.onError,
    isDynamic = options.isDynamic,
    modCache = options.modCache,
    promCache = options.promCache,
    usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
    path = config.path,
    resolve = config.resolve,
    load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';
  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (!exp) {
      var mod = void 0;
      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }
      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }
    return exp;
  };
  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);
      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };
      var request = load(props, {
        resolve: resolve,
        reject: reject
      });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };
  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }
      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };
  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };
  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}
var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};
var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};
var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};
var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }
  var load = typeof universalConfig === 'function' ? universalConfig :
  // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _react = __webpack_require__(/*! react */ "react");
var React = _interopRequireWildcard(_react);
var _requireById = __webpack_require__(/*! ./requireById */ "./node_modules/react-universal-component/dist/requireById/index.js");
var _requireById2 = _interopRequireDefault(_requireById);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
var isTest = exports.isTest = "development" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};
var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};
var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (true) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }
  return null;
};
var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};
var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};
var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};
var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }
    return createElement(Loading, props);
  };
};
var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};
var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};
var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};
var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};
var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// This component is the application entry point
class App extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Page"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.childComponents, this.childPages);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withModel"])(App));

/***/ }),

/***/ "./src/components/AdaptiveForm/AdaptiveForm.js":
/*!*****************************************************!*\
  !*** ./src/components/AdaptiveForm/AdaptiveForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aemforms/af-react-renderer */ "./node_modules/@aemforms/af-react-renderer/lib/index.js");
/* harmony import */ var _aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "@adobe/aem-spa-page-model-manager");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






// edit config
const FormContainerEditConfig = {
  emptyLabel: 'Adaptive Form Container',
  isEmpty(params) {
    return params.cqItems == null || params.cqItems.length === 0;
  }
};
const AdaptiveFormContainer = formJson => {
  var _state$model, _formState$properties, _formState$label;
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const isInEditor = _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_4__["AuthoringUtils"].isInEditor();
  // if form json changes, execute this code (written to support re-render of container in both authoring and at runtime)
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _form$properties;
    const form = Object(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__["createFormInstance"])({
      ...formJson
    });
    const localState = {
      model: form,
      id: form.getUniqueId()
    };
    // if in editor, update the new state as per the editor json received
    if (isInEditor && state !== null && state !== void 0 && state.model) {
      setState(localState);
    } else if (!(state !== null && state !== void 0 && state.model)) {
      // if there is no model initially, initialize the new state
      setState(localState);
    }
    let afPath = form === null || form === void 0 ? void 0 : (_form$properties = form.properties) === null || _form$properties === void 0 ? void 0 : _form$properties['fd:path'];
    // submit success handler
    form.subscribe(action => {
      var _action$payload;
      const body = (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.body;
      if (body) {
        if (body.redirectUrl) {
          window.location.href = body.redirectUrl;
        } else if (body.thankYouMessage) {
          const formContainerElement = document.querySelector(`[data-cmp-path='${afPath}']`);
          const thankYouMessage = document.createElement('div');
          thankYouMessage.setAttribute('class', 'tyMessage');
          thankYouMessage.innerHTML = body.thankYouMessage;
          formContainerElement.replaceWith(thankYouMessage);
        } else {
          // if anything else, then it should be an error
          window.alert('Error during form submission'); // todo localize this
        }
      }
    }, 'submitSuccess');

    // submit error handler
    form.subscribe(action => {
      const defaultSubmissionError = 'Error during form submission'; // todo localize this
      window.alert(defaultSubmissionError);
    }, 'submitError');
  }, [formJson]);
  if (!state) {
    return null;
  }
  const formState = state === null || state === void 0 ? void 0 : (_state$model = state.model) === null || _state$model === void 0 ? void 0 : _state$model.getState();
  const formPath = formState === null || formState === void 0 ? void 0 : (_formState$properties = formState.properties) === null || _formState$properties === void 0 ? void 0 : _formState$properties['fd:path'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_3__["FormContext"].Provider, {
    value: {
      form: state.model,
      modelId: state.model.id
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-cmp-path": formPath,
    "data-cmp-is": "adaptiveFormContainer"
  }, formState !== null && formState !== void 0 && (_formState$label = formState.label) !== null && _formState$label !== void 0 && _formState$label.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, formState.label.value) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ResponsiveGrid"], _extends({
    config: FormContainerEditConfig
  }, formState))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/formcontainer')(AdaptiveFormContainer, FormContainerEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/RuleEngineHook.js":
/*!*******************************************************!*\
  !*** ./src/components/AdaptiveForm/RuleEngineHook.js ***!
  \*******************************************************/
/*! exports provided: withRuleEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRuleEngine", function() { return withRuleEngine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aemforms/af-react-renderer */ "./node_modules/@aemforms/af-react-renderer/lib/index.js");
/* harmony import */ var _aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "@adobe/aem-spa-page-model-manager");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




// Wrapper over useRuleEngine hook to interact with adaptive form sdk
function withRuleEngine(Component) {
  return function WrappedComponent(props) {
    const {
      isInEditor
    } = props;
    let convertedProps = {
      ...props
    };
    if (!isInEditor) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [state, handlers] = Object(_aemforms_af_react_renderer__WEBPACK_IMPORTED_MODULE_1__["useRuleEngine"])(props);
      convertedProps = {
        ...convertedProps,
        ...state,
        handlers
      };
    }
    const isInEditorUpdated = _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_2__["AuthoringUtils"].isInEditor();
    const visible = typeof convertedProps.visible === 'undefined' || convertedProps.visible;
    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
      isInEditor: isInEditorUpdated
    }, convertedProps)) : null;
  };
}

/***/ }),

/***/ "./src/components/AdaptiveForm/components/Button.js":
/*!**********************************************************!*\
  !*** ./src/components/AdaptiveForm/components/Button.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

// Customer's component
const ButtonComponent = props => {
  const classes = useStyles();
  const {
    label,
    enabled,
    visible,
    onClick
  } = props;
  const isVisible = typeof visible === 'undefined' || visible;
  const isEnabled = enabled === false ? false : true;
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    variant: "contained",
    color: "primary",
    size: "medium",
    onClick: onClick,
    className: classes.button,
    disabled: !isEnabled
  }, label === null || label === void 0 ? void 0 : label.value) : null;
};

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormButton = props => {
  const {
    handlers,
    ...state
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonComponent, _extends({}, state, {
    onClick: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchClick
  }));
};
const ButtonEditConfig = {
  emptyLabel: 'Button',
  isEmpty(props) {
    return !props;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_3__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/button')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_4__["withRuleEngine"])(AdaptiveFormButton), ButtonEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/components/CheckboxGroup.js":
/*!*****************************************************************!*\
  !*** ./src/components/AdaptiveForm/components/CheckboxGroup.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
/* harmony import */ var _richTextString__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../richTextString */ "./src/components/AdaptiveForm/richTextString.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 200
  }
}));
// Customer's component
const CheckboxGroupComponent = props => {
  const {
    label,
    id,
    required,
    enumNames,
    enum: enums,
    visible,
    value,
    onChange,
    description,
    valid,
    name
  } = props;
  const errorMessage = props.errorMessage || _richTextString__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_ERROR_MESSAGE"];
  const validateState = valid === false ? 'invalid' : valid === undefined || Object(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(value) ? undefined : 'valid';
  const error = validateState === 'invalid';
  const options = enumNames && enumNames.length ? enumNames : enums || [];
  const isVisible = typeof visible === 'undefined' || visible;
  const valueArr = value == null ? [] : value instanceof Array ? value : [value];
  const classes = useStyles();
  const changeHandler = event => {
    const checked = event.target.checked;
    const val = event.target.value;
    let finalVal = [...valueArr];
    if (checked) {
      finalVal.push(val);
    }
    const index = finalVal.findIndex(a => a === val);
    if (index !== -1 && !checked) {
      finalVal.splice(index, 1);
    }
    onChange(finalVal);
  };
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
    required: required,
    error: error,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_2___default.a, null, label === null || label === void 0 ? void 0 : label.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_4___default.a, null, options.map((opt, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    key: enums[index],
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      color: "primary",
      name: name,
      value: enums[index],
      checked: valueArr.includes(enums[index]),
      onChange: changeHandler
    }),
    label: opt
  }))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6___default.a, null, errorMessage), description && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6___default.a, null, Object(_richTextString__WEBPACK_IMPORTED_MODULE_11__["richTextString"])(description))) : null;
};

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormCheckboxGroup = props => {
  const {
    handlers,
    ...state
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckboxGroupComponent, _extends({}, state, {
    onChange: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange
  }));
};
const CheckboxGroupEditConfig = {
  emptyLabel: 'Checkbox Group',
  isEmpty(props) {
    return !props;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/checkboxgroup')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_10__["withRuleEngine"])(AdaptiveFormCheckboxGroup), CheckboxGroupEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/components/DropDown.js":
/*!************************************************************!*\
  !*** ./src/components/AdaptiveForm/components/DropDown.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
/* harmony import */ var _richTextString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../richTextString */ "./src/components/AdaptiveForm/richTextString.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
// Customer's component
const DropDownComponent = props => {
  const {
    label,
    id,
    required,
    enumNames,
    enum: enums,
    visible,
    value,
    onChange,
    description,
    valid,
    onBlur
  } = props;
  const errorMessage = props.errorMessage || _richTextString__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ERROR_MESSAGE"];
  const validateState = valid === false ? 'invalid' : valid === undefined || Object(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(value) ? undefined : 'valid';
  const error = validateState === 'invalid';
  const dropdownData = enumNames && enumNames.length ? enumNames : enums || [];
  const isVisible = typeof visible === 'undefined' || visible;
  const classes = useStyles();
  const changeHandler = event => {
    onChange(event.target.value);
  };
  const handleBlur = event => {
    onBlur(event.target.value || '');
  };
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    required: required,
    error: error,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: `${id}-label`
  }, label === null || label === void 0 ? void 0 : label.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    labelId: `${id}-label`,
    id: id,
    value: value,
    onChange: changeHandler,
    onBlur: handleBlur,
    displayEmpty: true,
    className: classes.selectEmpty
  }, dropdownData.map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: enums[index],
    key: enums[index]
  }, text))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4___default.a, null, errorMessage), description && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_4___default.a, null, Object(_richTextString__WEBPACK_IMPORTED_MODULE_10__["richTextString"])(description))) : null;
};

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormDropDown = props => {
  const {
    handlers,
    ...state
  } = props;
  const selectedKey = (state === null || state === void 0 ? void 0 : state.value) != null ? `${state.value}` : state.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownComponent, _extends({}, state, {
    selectedKey: selectedKey,
    onChange: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange,
    onBlur: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange
  }));
};
const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty(props) {
    return !props;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_7__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/dropdown')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_9__["withRuleEngine"])(AdaptiveFormDropDown), DropDownEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/components/Panel.js":
/*!*********************************************************!*\
  !*** ./src/components/AdaptiveForm/components/Panel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const PanelEditConfig = {
  emptyLabel: 'Adaptive Form Panel',
  isEmpty(props) {
    return props.cqItems == null || props.cqItems.length === 0;
  }
};

// Customer's component
const PanelComponent = props => {
  var _props$label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props === null || props === void 0 ? void 0 : (_props$label = props.label) === null || _props$label === void 0 ? void 0 : _props$label.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["ResponsiveGrid"], _extends({
    config: PanelEditConfig
  }, props)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/panelcontainer')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_3__["withRuleEngine"])(PanelComponent), PanelEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/components/RadioButton.js":
/*!***************************************************************!*\
  !*** ./src/components/AdaptiveForm/components/RadioButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
/* harmony import */ var _richTextString__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../richTextString */ "./src/components/AdaptiveForm/richTextString.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 200
  }
}));
// Customer's component
const RadioGroupComponent = props => {
  const {
    label,
    id,
    required,
    enumNames,
    enum: enums,
    visible,
    value,
    onChange,
    description,
    valid,
    name
  } = props;
  const errorMessage = props.errorMessage || _richTextString__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_ERROR_MESSAGE"];
  const validateState = valid === false ? 'invalid' : valid === undefined || Object(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(value) ? undefined : 'valid';
  const error = validateState === 'invalid';
  const options = enumNames && enumNames.length ? enumNames : enums || [];
  const isVisible = typeof visible === 'undefined' || visible;
  const classes = useStyles();
  const changeHandler = event => {
    onChange(event.target.value);
  };
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    required: required,
    error: error,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default.a, null, label === null || label === void 0 ? void 0 : label.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: name,
    value: value,
    onChange: changeHandler
  }, options.map((opt, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: enums[index],
    key: enums[index],
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
      color: "primary"
    }),
    label: opt
  }))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default.a, null, errorMessage), description && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_7___default.a, null, Object(_richTextString__WEBPACK_IMPORTED_MODULE_11__["richTextString"])(description))) : null;
};

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormRadioGroup = props => {
  const {
    handlers,
    ...state
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioGroupComponent, _extends({}, state, {
    onChange: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange
  }));
};
const RadioGroupEditConfig = {
  emptyLabel: 'Radio Group',
  isEmpty(props) {
    return !props;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_8__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/radiobutton')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_10__["withRuleEngine"])(AdaptiveFormRadioGroup), RadioGroupEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/components/TextField.js":
/*!*************************************************************!*\
  !*** ./src/components/AdaptiveForm/components/TextField.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aemforms/af-core */ "./node_modules/@aemforms/af-core/lib/index.js");
/* harmony import */ var _aemforms_af_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _richTextString__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../richTextString */ "./src/components/AdaptiveForm/richTextString.js");
/* harmony import */ var _RuleEngineHook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../RuleEngineHook */ "./src/components/AdaptiveForm/RuleEngineHook.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 200
  }
}));
const TextFieldComponent = props => {
  const [showPassword, setShowPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    id,
    label,
    value,
    required,
    readOnly = false,
    properties,
    placeholder,
    description,
    visible,
    format,
    onChange,
    onBlur,
    maxLength,
    valid,
    appliedCssClassNames
  } = props;
  const errorMessage = props.errorMessage || _richTextString__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_ERROR_MESSAGE"];
  const validateState = valid === false ? 'invalid' : valid === undefined || Object(_aemforms_af_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(value) ? undefined : 'valid';
  const error = validateState === 'invalid';
  const {
    inputType
  } = properties || {};
  const isVisible = typeof visible === 'undefined' || visible;
  const isPassword = inputType === 'password';
  const classes = useStyles();
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const keyChangeFn = event => {
    var _event$target, _thisVal;
    let thisVal = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value;
    const textValLen = (_thisVal = thisVal) === null || _thisVal === void 0 ? void 0 : _thisVal.length;
    if (format === 'date') {
      if (event !== null && event !== void 0 && event.keyCode && event.keyCode !== 8) {
        if (textValLen === 4 || textValLen === 7) {
          thisVal += '-';
          // eslint-disable-next-line no-param-reassign
          event.target.value = thisVal;
        }
      }
    } else if ((properties === null || properties === void 0 ? void 0 : properties.format) === 'ssn' || (properties === null || properties === void 0 ? void 0 : properties.format) === 'zip') {
      if (event !== null && event !== void 0 && event.keyCode && event.keyCode !== 8) {
        const zipCheck = properties.format === 'zip' && textValLen === 5;
        const ssnCheck = properties.format === 'ssn' && (textValLen === 3 || textValLen === 7);
        if (ssnCheck || zipCheck) {
          thisVal += '-';
        }
        // eslint-disable-next-line no-param-reassign
        event.target.value = thisVal;
      }
      const newVal = thisVal.replace(/-/g, '');
      onChange(newVal);
      return true;
    }
    onChange(thisVal);
  };
  const handleChange = event => {
    const thisVal = event.target.value;
    if (maxLength && thisVal.length === maxLength + 1) {
      return;
    }
    keyChangeFn(event);
  };
  const handleKeyDown = event => {
    keyChangeFn(event);
  };
  const handleBlur = event => {
    onBlur(event.target.value);
  };
  const getPasswordIcon = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      position: "end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      "aria-label": "toggle password visibility",
      onClick: handleClick
    }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12___default.a, null)));
  };
  const Cmp = 'outlined' === appliedCssClassNames ? _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_6___default.a : _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default.a;
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    required: required,
    error: error,
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    htmlFor: id
  }, label === null || label === void 0 ? void 0 : label.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cmp, {
    id: id,
    type: showPassword ? "password" : "text",
    value: value || '',
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    endAdornment: isPassword ? getPasswordIcon() : null,
    placeholder: placeholder,
    required: required,
    readOnly: readOnly
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default.a, null, errorMessage), description && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default.a, null, Object(_richTextString__WEBPACK_IMPORTED_MODULE_13__["richTextString"])(description))) : null;
};

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormTextInput = props => {
  const {
    handlers,
    ...state
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextFieldComponent, _extends({}, state, {
    onChange: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange,
    onBlur: handlers === null || handlers === void 0 ? void 0 : handlers.dispatchChange
  }));
};
const TextFieldEditConfig = {
  emptyLabel: 'Text Field',
  isEmpty(props) {
    return !props;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('wknd-spa-react-latest/components/adaptiveForm/textinput')(Object(_RuleEngineHook__WEBPACK_IMPORTED_MODULE_14__["withRuleEngine"])(AdaptiveFormTextInput), TextFieldEditConfig));

/***/ }),

/***/ "./src/components/AdaptiveForm/richTextString.js":
/*!*******************************************************!*\
  !*** ./src/components/AdaptiveForm/richTextString.js ***!
  \*******************************************************/
/*! exports provided: richTextString, DEFAULT_ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "richTextString", function() { return richTextString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ERROR_MESSAGE", function() { return DEFAULT_ERROR_MESSAGE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sanitize-html */ "sanitize-html");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_1__);


const richTextString = function () {
  let stringMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const htmlProp = {
    __html: sanitize_html__WEBPACK_IMPORTED_MODULE_1___default()(stringMsg)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: htmlProp
  });
};
const DEFAULT_ERROR_MESSAGE = 'There is an error in the field';

/***/ }),

/***/ "./src/components/Container/Container.js":
/*!***********************************************!*\
  !*** ./src/components/Container/Container.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


const ContainerConfig = {
  emptyLabel: 'Container',
  isEmpty: function (props) {
    return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
  }
};
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-spa-react-latest/components/container')(Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withComponentMappingContext"])(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["AllowedComponentsContainer"]), ContainerConfig);

/***/ }),

/***/ "./src/components/ExperienceFragment/ExperienceFragment.js":
/*!*****************************************************************!*\
  !*** ./src/components/ExperienceFragment/ExperienceFragment.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


const ExperienceFragmentVariationConfig = {
  emptyLabel: 'Experience Fragment',
  isEmpty: function (props) {
    return !props || !props.configured;
  }
};
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-spa-react-latest/components/experiencefragment')(Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withComponentMappingContext"])(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Container"]), ExperienceFragmentVariationConfig);

/***/ }),

/***/ "./src/components/Page/Page.css":
/*!**************************************!*\
  !*** ./src/components/Page/Page.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ~ Copyright 2020 Adobe Systems Incorporated\n ~\n ~ Licensed under the Apache License, Version 2.0 (the \"License\");\n ~ you may not use this file except in compliance with the License.\n ~ You may obtain a copy of the License at\n ~\n ~     http://www.apache.org/licenses/LICENSE-2.0\n ~\n ~ Unless required by applicable law or agreed to in writing, software\n ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n ~ See the License for the specific language governing permissions and\n ~ limitations under the License.\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\n.page {\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 12px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Page/Page.js":
/*!*************************************!*\
  !*** ./src/components/Page/Page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RouteHelper_RouteHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RouteHelper/RouteHelper */ "./src/components/RouteHelper/RouteHelper.js");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



__webpack_require__(/*! ./Page.css */ "./src/components/Page/Page.css");

// This component is a variant of a Page component mapped to the
// "wknd-spa-react-latest/components/page" resource type. For now, the rendering is
// the same as the RootPage; this is more for illustration purposes
class AppPage extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["Page"] {
  get containerProps() {
    let attrs = super.containerProps;
    attrs.className = (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
    return attrs;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('wknd-spa-react-latest/components/page')(Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_0__["withComponentMappingContext"])(Object(_RouteHelper_RouteHelper__WEBPACK_IMPORTED_MODULE_1__["withRoute"])(AppPage))));

/***/ }),

/***/ "./src/components/RouteHelper/RouteHelper.js":
/*!***************************************************!*\
  !*** ./src/components/RouteHelper/RouteHelper.js ***!
  \***************************************************/
/*! exports provided: withRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return withRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/




/**
 * Helper that facilitate the use of the {@link Route} component
 */

/**
 * Returns a composite component where a {@link Route} component wraps the provided component
 *
 * @param {React.Component} WrappedComponent    - React component to be wrapped
 * @param {string} [extension=html]             - extension used to identify a route amongst the tree of resource URLs
 * @returns {CompositeRoute}
 */
const withRoute = (WrappedComponent, extension) => {
  return class CompositeRoute extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
      let routePath = this.props.cqPath;
      if (!routePath) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
      }
      extension = extension || 'html';

      // Context path + route path + extension
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: routePath,
        exact: true,
        path: '(.*)' + routePath + '(.' + extension + ')?',
        render: routeProps => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, this.props, routeProps));
        }
      });
    }
  };
};

/***/ }),

/***/ "./src/components/Text/Text.css":
/*!**************************************!*\
  !*** ./src/components/Text/Text.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ~ Copyright 2020 Adobe Systems Incorporated\n ~\n ~ Licensed under the Apache License, Version 2.0 (the \"License\");\n ~ you may not use this file except in compliance with the License.\n ~ You may obtain a copy of the License at\n ~\n ~     http://www.apache.org/licenses/LICENSE-2.0\n ~\n ~ Unless required by applicable law or agreed to in writing, software\n ~ distributed under the License is distributed on an \"AS IS\" BASIS,\n ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n ~ See the License for the specific language governing permissions and\n ~ limitations under the License.\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  border: 0;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: rgba(0, 0, 0, 0.8);\n  text-transform: uppercase;\n}\n\np {\n  color: rgba(0, 0, 0, 0.8);\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 200;\n  line-height: 32px;\n}\n\nh1 {\n  font-size: 48px;\n  letter-spacing: 0.8em;\n}\n\nh2 {\n  font-size: 48px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n\nh3 {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 4px 0;\n}\n\nh5 {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 18px;\n  text-align: center;\n}\n\n@media (min-width: 651px) and (max-width: 1200px) {\n  h1 {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 30px;\n  }\n\n  h3 {\n    font-weight: 400;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Text/Text.js":
/*!*************************************!*\
  !*** ./src/components/Text/Text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sanitize-html */ "sanitize-html");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanitize_html_whitelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanitize-html.whitelist */ "./src/components/sanitize-html.whitelist.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_extract_model_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/extract-model-id */ "./src/utils/extract-model-id.js");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/





__webpack_require__(/*! ./Text.css */ "./src/components/Text/Text.css");

/**
 * Text React component
 */
class Text extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  get richTextContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: Object(_utils_extract_model_id__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.cqPath),
      "data-rte-editelement": true,
      dangerouslySetInnerHTML: {
        __html: sanitize_html__WEBPACK_IMPORTED_MODULE_0___default()(this.props.text, _sanitize_html_whitelist__WEBPACK_IMPORTED_MODULE_1__["default"])
      }
    });
  }
  get textContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.props.text);
  }
  render() {
    return this.props.richText ? this.richTextContent : this.textContent;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/import-components.js":
/*!*********************************************!*\
  !*** ./src/components/import-components.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-universal-import/universalImport */ "./node_modules/babel-plugin-universal-import/universalImport.js");
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_withAsyncImport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/withAsyncImport */ "./src/utils/withAsyncImport.js");
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page/Page */ "./src/components/Page/Page.js");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container/Container */ "./src/components/Container/Container.js");
/* harmony import */ var _ExperienceFragment_ExperienceFragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExperienceFragment/ExperienceFragment */ "./src/components/ExperienceFragment/ExperienceFragment.js");
/* harmony import */ var _AdaptiveForm_AdaptiveForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdaptiveForm/AdaptiveForm */ "./src/components/AdaptiveForm/AdaptiveForm.js");
/* harmony import */ var _AdaptiveForm_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdaptiveForm/components/Button */ "./src/components/AdaptiveForm/components/Button.js");
/* harmony import */ var _AdaptiveForm_components_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdaptiveForm/components/DropDown */ "./src/components/AdaptiveForm/components/DropDown.js");
/* harmony import */ var _AdaptiveForm_components_Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdaptiveForm/components/Panel */ "./src/components/AdaptiveForm/components/Panel.js");
/* harmony import */ var _AdaptiveForm_components_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdaptiveForm/components/TextField */ "./src/components/AdaptiveForm/components/TextField.js");
/* harmony import */ var _AdaptiveForm_components_RadioButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdaptiveForm/components/RadioButton */ "./src/components/AdaptiveForm/components/RadioButton.js");
/* harmony import */ var _AdaptiveForm_components_CheckboxGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AdaptiveForm/components/CheckboxGroup */ "./src/components/AdaptiveForm/components/CheckboxGroup.js");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _adobe_aem_core_components_react_spa_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-react-spa/dist/isEmptyFunctions */ "@adobe/aem-core-components-react-spa/dist/isEmptyFunctions");
/* harmony import */ var _adobe_aem_core_components_react_spa_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_core_components_react_spa_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _adobe_aem_core_components_react_base_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-react-base/dist/isEmptyFunctions */ "@adobe/aem-core-components-react-base/dist/isEmptyFunctions");
/* harmony import */ var _adobe_aem_core_components_react_base_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_core_components_react_base_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @adobe/aem-core-components-react-spa */ "@adobe/aem-core-components-react-spa");
/* harmony import */ var _adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @adobe/aem-core-components-react-base */ "@adobe/aem-core-components-react-base");
/* harmony import */ var _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__);






/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

















//lazyload / code splitting example of an internal component
const LazyTextComponent = Object(_utils_withAsyncImport__WEBPACK_IMPORTED_MODULE_2__["default"])(() => babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "./Text/Text",
  load: () => Promise.all([Promise.resolve(/*! import() | Text/Text */).then(__webpack_require__.bind(null, /*! ./Text/Text */ "./src/components/Text/Text.js"))]).then(proms => proms[0]),
  path: () => path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `./Text/Text`),
  resolve: () => /*require.resolve*/(/*! ./Text/Text */ "./src/components/Text/Text.js"),
  chunkName: () => `Text/Text`
}));

//lazyload / code splitting examples of external components
const TitleV2 = Object(_utils_withAsyncImport__WEBPACK_IMPORTED_MODULE_2__["default"])(() => babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2",
  load: () => Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2 */ "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2", 7))]).then(proms => proms[0]),
  path: () => path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2`),
  resolve: () => /*require.resolve*/(/*! @adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2 */ "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2"),
  chunkName: () => `@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2`
}));
const CarouselV1 = Object(_utils_withAsyncImport__WEBPACK_IMPORTED_MODULE_2__["default"])(() => babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1",
  load: () => Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1 */ "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1", 7))]).then(proms => proms[0]),
  path: () => path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1`),
  resolve: () => /*require.resolve*/(/*! @adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1 */ "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1"),
  chunkName: () => `@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1`
}));
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/download')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["DownloadV1"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["DownloadV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/list')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ListV2"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ListV2IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/separator')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["SeparatorV1"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["SeparatorV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/button')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ButtonV1"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ButtonV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/teaser')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["TeaserV1"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["TeaserV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/image')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ImageV2"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["ImageV2IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/title')(TitleV2, {
  isEmpty: _adobe_aem_core_components_react_base_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_15__["TitleV2IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/breadcrumb')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["BreadCrumbV2"], {
  isEmpty: _adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["BreadCrumbV2IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/navigation')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["NavigationV1"]);
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/languagenavigation')(_adobe_aem_core_components_react_base__WEBPACK_IMPORTED_MODULE_17__["LanguageNavigationV1"]);
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/tabs')(_adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["TabsV1"], {
  isEmpty: _adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["TabsV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/accordion')(_adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["AccordionV1"], {
  isEmpty: _adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["AccordionV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/carousel')(CarouselV1, {
  isEmpty: _adobe_aem_core_components_react_spa_dist_isEmptyFunctions__WEBPACK_IMPORTED_MODULE_14__["CarouselV1IsEmptyFn"]
});
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/container')(_adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["ContainerV1"], {
  isEmpty: _adobe_aem_core_components_react_spa__WEBPACK_IMPORTED_MODULE_16__["ContainerV1IsEmptyFn"]
});

//lazy load of internal component (hello world)

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {
  emptyLabel: 'Text',
  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};
Object(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_13__["MapTo"])('wknd-spa-react-latest/components/text')(LazyTextComponent, TextEditConfig);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/components/sanitize-html.whitelist.js":
/*!***************************************************!*\
  !*** ./src/components/sanitize-html.whitelist.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sanitize-html */ "sanitize-html");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_0__);

sanitize_html__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.allowedAttributes['div'] = ['class'];
sanitize_html__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.allowedAttributes['span'] = ['class'];
/* harmony default export */ __webpack_exports__["default"] = (sanitize_html__WEBPACK_IMPORTED_MODULE_0___default.a.defaults);

/***/ }),

/***/ "./src/server/aem-processor.functions.js":
/*!***********************************************!*\
  !*** ./src/server/aem-processor.functions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adobe/aem-react-editable-components */ "@adobe/aem-react-editable-components");
/* harmony import */ var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "@adobe/aem-spa-page-model-manager");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_import_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/import-components */ "./src/components/import-components.js");







function renderModelToHTMLString(model, pagePath, requestUrl, requestPath, pageModelRootPath, isInEditor) {
  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
    location: requestUrl,
    context: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__["EditorContext"].Provider, {
    value: isInEditor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cqChildren: model[_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__["Constants"].CHILDREN_PROP],
    cqItems: model[_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__["Constants"].ITEMS_PROP],
    cqItemsOrder: model[_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_4__["Constants"].ITEMS_ORDER_PROP],
    cqPath: pageModelRootPath,
    locationPathname: requestPath
  }))));

  // We are using ' for the string to we need to make sure we are encoding all other '
  let state = {
    rootModel: model,
    rootModelUrl: _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_5__["ModelManager"].rootPath,
    pagePath
  };
  let stateStr = JSON.stringify(state);
  return `${html}
     <script type="application/json" id="__INITIAL_STATE__">
         ${stateStr}
     </script>`;
}
async function processSPA(args) {
  const APP_ROOT_PATH = '/content/wknd-spa-react-latest/us/en';
  const wcmMode = args.wcmmode;
  const isInEditor = wcmMode && wcmMode === 'EDIT' || wcmMode === 'PREVIEW';
  const pageModelRootPath = args.pageRoot || APP_ROOT_PATH;
  let modelData = args.data;
  let pagePath = args.pagePath.replace('.html', '');
  await _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_5__["ModelManager"].initialize({
    path: pageModelRootPath,
    model: modelData
  });
  const response = await renderModelToHTMLString(modelData, pagePath, args.pagePath, args.pagePath, pageModelRootPath, isInEditor);
  return response;
}
/* harmony default export */ __webpack_exports__["default"] = (processSPA);

/***/ }),

/***/ "./src/server/aem-processor.js":
/*!*************************************!*\
  !*** ./src/server/aem-processor.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aem_processor_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aem-processor.functions */ "./src/server/aem-processor.functions.js");

exports.processSPA = _aem_processor_functions__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/utils/extract-model-id.js":
/*!***************************************!*\
  !*** ./src/utils/extract-model-id.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractModelId; });
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/**
 * Extract an id from the cqModel field of given properties
 *
 * @param path - Path to be converted into an id
 * @returns {string|undefined}
 */
function extractModelId(path) {
  return path && path.replace(/\/|:/g, '_');
}

/***/ }),

/***/ "./src/utils/withAsyncImport.js":
/*!**************************************!*\
  !*** ./src/utils/withAsyncImport.js ***!
  \**************************************/
/*! exports provided: withAsyncImport, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAsyncImport", function() { return withAsyncImport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js");
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

//@ts-nocheck


const withProps = (Component, props) => {
  return function (matchProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, matchProps));
  };
};
const ErrorMessage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Error loading chunks!");
};
const ComponentBlockSkeleton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "loading-skeleton loading-skeleton__block",
  style: {
    height: props.skeletonHeight ? props.skeletonHeight : '50px'
  }
});
const FallbackComponent = withProps(ComponentBlockSkeleton, {
  skeletonHeight: 1000
});
const withAsyncImport = function (asyncImport) {
  let loadingComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FallbackComponent;
  return react_universal_component__WEBPACK_IMPORTED_MODULE_1___default()(asyncImport, {
    loading: loadingComponent,
    error: ErrorMessage
  });
};
/* harmony default export */ __webpack_exports__["default"] = (withAsyncImport);

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/server/aem-processor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/aem-processor.js */"./src/server/aem-processor.js");


/***/ }),

/***/ "@adobe/aem-core-components-react-base":
/*!********************************************************!*\
  !*** external "@adobe/aem-core-components-react-base" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-base");

/***/ }),

/***/ "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2":
/*!****************************************************************************************!*\
  !*** external "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2");

/***/ }),

/***/ "@adobe/aem-core-components-react-base/dist/isEmptyFunctions":
/*!******************************************************************************!*\
  !*** external "@adobe/aem-core-components-react-base/dist/isEmptyFunctions" ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-base/dist/isEmptyFunctions");

/***/ }),

/***/ "@adobe/aem-core-components-react-spa":
/*!*******************************************************!*\
  !*** external "@adobe/aem-core-components-react-spa" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-spa");

/***/ }),

/***/ "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1":
/*!*********************************************************************************************!*\
  !*** external "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1" ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1");

/***/ }),

/***/ "@adobe/aem-core-components-react-spa/dist/isEmptyFunctions":
/*!*****************************************************************************!*\
  !*** external "@adobe/aem-core-components-react-spa/dist/isEmptyFunctions" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-core-components-react-spa/dist/isEmptyFunctions");

/***/ }),

/***/ "@adobe/aem-react-editable-components":
/*!*******************************************************!*\
  !*** external "@adobe/aem-react-editable-components" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-react-editable-components");

/***/ }),

/***/ "@adobe/aem-spa-page-model-manager":
/*!****************************************************!*\
  !*** external "@adobe/aem-spa-page-model-manager" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@adobe/aem-spa-page-model-manager");

/***/ }),

/***/ "@aemforms/af-formatters":
/*!******************************************!*\
  !*** external "@aemforms/af-formatters" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@aemforms/af-formatters");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "sanitize-html":
/*!********************************!*\
  !*** external "sanitize-html" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map