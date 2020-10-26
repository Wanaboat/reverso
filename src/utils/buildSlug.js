const buildSlug = (node, lang) => {
    console.log('node', node)
    let slug = []
    if (node) {
        if (node.uid) {
            slug.push(node.uid)
            if (node.data.parent.document) {
                slug.push(node.data.parent.document.uid)
                if (node.data.parent.document.data.parent.document) {
                    slug.push(node.data.parent.document.data.parent.document.uid)
                    if (node.data.parent.document.data.parent.document.data.parent.document) {
                        slug.push(node.data.parent.document.data.parent.document.data.parent.document.uid)
                    }
                }
            }
            if (lang === 'fr') {
                slug.push('fr')
            }
            return (slug.reverse().join('/'))
        }
        if (node.document) {
            console.log('node.document', node.document)
            slug.push(node.document.uid)
            if (node.document.data.parent.document) {
                slug.push(node.document.data.parent.document.uid)
                if (node.document.data.parent.document.data.parent.document) {
                    slug.push(node.document.data.parent.document.data.parent.document.uid)
                    if (node.document.data.parent.document.data.parent.document.data.parent.document) {
                        slug.push(node.document.data.parent.document.data.parent.document.data.parent.document.uid)
                    }
                }
            }
            if (node.lang === 'fr-fr') {
                slug.push('fr')
            }
            return (slug.reverse().join('/'))
        }
    }
}


export default buildSlug