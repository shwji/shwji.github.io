System.register("chunks:///main.js", ['cc'], function () {
  'use strict';

  var cclegacy, _decorator, Component, Label;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
    }],
    execute: function () {
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _class;

      cclegacy._RF.push({}, "f3b43vj/JNI3pJwCG+09hvc", "onld", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var onld = (_dec = ccclass('onld'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(onld, _Component);

        function onld() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.cz = 0;
          _this.resultDisplay = void 0;
          return _this;
        }

        var _proto = onld.prototype;

        _proto.start = function start() {// director.loadScene("main");
        };

        _proto.update = function update() {
          if (this.cz <= 250) {
            this.cz = this.cz + 1;
          } else {
            cc.director.loadScene("zpgm");
          } // this.resultDisplay.node.active = false;

        };

        return onld;
      }(Component)) || _class);

      cclegacy._RF.pop();

      var _dec$1, _dec2, _class$1, _class2, _descriptor;

      cclegacy._RF.push({}, "0a863pCNixLUp/vQXG5QSNy", "pgmzz", undefined);

      var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property;
      var onld$1 = (_dec$1 = ccclass$1('pgmzz'), _dec2 = property$1({
        type: Label
      }), _dec$1(_class$1 = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(onld, _Component);

        function onld() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _this.cz1 = 0;
          _this.resultDisplay = void 0;
          return _this;
        }

        var _proto = onld.prototype;

        _proto.start = function start() {// director.loadScene("main");
        };

        _proto.update = function update() {
          if (this.cz1 <= 100) {
            this.cz1 = this.cz1 + 1;
          } else {
            this.label.string = "123";
          } // this.resultDisplay.node.active = false;

        };

        return onld;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class$1);

      cclegacy._RF.pop();

      var _dec$2, _dec2$1, _class$2, _class2$1, _descriptor$1;

      cclegacy._RF.push({}, "57463wMQfdLdIijJXH4HNmk", "vp", undefined);

      var ccclass$2 = _decorator.ccclass,
          type = _decorator.type;
      var vp = (_dec$2 = ccclass$2('vp'), _dec2$1 = type(vp), _dec$2(_class$2 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(vp, _Component);

        function vp() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "videoPlayer", _descriptor$1, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = vp.prototype;

        _proto.start = function start() {
          this.videoplayer.play();
        };

        _proto.update = function update() {};

        return vp;
      }(Component), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "videoPlayer", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$1)) || _class$2);

      cclegacy._RF.pop();
    }
  };
});
