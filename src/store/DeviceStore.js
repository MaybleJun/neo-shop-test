import {makeAutoObservable} from "mobx";

    export default class DeviceStore {
        constructor() {
            this._types = []
            this._devices = []
            this._selectedType = {}
            this._selectedBrand = {}
            this._totalCount = 0
            this._limit = 3
            makeAutoObservable(this)
        }
    
        setTypes(types) {
            this._types = types
        }
      
        setDevices(devices) {
            this._devices = devices
        }
    
        setSelectedType(type) {
            this.setPage(1)
            this._selectedType = type
        }
       
        setTotalCount(count) {
            this._totalCount = count
        }
    
        get types() {
            return this._types
        }
      
        get devices() {
            return this._devices
        }
        get selectedType() {
            return this._selectedType
        }
       
        get totalCount() {
            return this._totalCount
        }
      
        get limit() {
            return this._limit
        }
    }
 