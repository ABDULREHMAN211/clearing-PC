exports.onCreatePage = async ({ page,actions }) => {
    const {createPage} = actions

    if(page.path.match(/^\/Home/)) {

        page.matchPath = "/Home/*"

        // Update the page
        createPage(page)
    }
}