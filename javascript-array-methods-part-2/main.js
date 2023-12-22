console.log('Starting')

var numberArr = [1, 2, 3, 4, 5, 6, 10, 20, 30, 50, 55, 78, 32]

let photosArr = [
    {
        albumId: 1,
        id: 3,
        title: 'officia porro iure quia iusto qui ipsa ut modi',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
        albumId: 1,
        id: 4,
        title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
        url: 'https://via.placeholder.com/600/d32776',
        thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
        albumId: 1,
        id: 5,
        title: 'natus nisi omnis corporis facere molestiae rerum in',
        url: 'https://via.placeholder.com/600/f66b97',
        thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
        albumId: 1,
        id: 6,
        title: 'accusamus ea aliquid et amet sequi nemo',
        url: 'https://via.placeholder.com/600/56a8c2',
        thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
]

/**
 *
 * @param cb} (callback function)
 * @return newArr
 */
Array.prototype.myFilterMethod = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

/**
 *
 * @param cb (callback)
 * @return item
 */
Array.prototype.myFindMethod = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return this[i]
        }
    }
}

let result = numberArr.myFindMethod(function (item) {
    return item >= 10
})

/**
 * 
 * @param  cb (callback)
 * @return index
 */
Array.prototype.myFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return i
        }
    }
}

let findIndex = photosArr.myFindIndex(function (item) {
    return item.id === 5
});


prompt("Text")