this.route.params.subscribe((params) => {
    this.listingProcessing = true;
    let id = this.route.snapshot.paramMap.get("id");
    id = id.split("-").pop();

    this.listingsService.getListings("/" + id).subscribe((res) => {
        this.listingProcessing = false;
        this.listing = res;

        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem(COOKIE_PREFIX + "currentUser")) {
                this.userService
                    .addToRecentViewed(
                        localStorage.getItem(COOKIE_PREFIX + "currentUser"),
                        id
                    )
                    .subscribe((res) => { });
            }
        }

        this.listingsService.updateListingViews(id).subscribe((res) => { });

        /**
         * Meta tags for SEO
         */
        this.seo.generateTags({
            title: res.title["rendered"],
            description: res.excerpt["rendered"],
            image: res.better_featured_image["source_url"],
            slug: window.location.pathname,
        });
    });

    this.listingsService.getListingGallery(id).subscribe((res) => {
        this.listingGallery = res.gallery;
        this.listingFeaturedPic = this.listingGallery[0]["source_url"];
    });

    if (localStorage.getItem(COOKIE_PREFIX + "currentUser")) {
        this.userService
            .getSavedListingIDs(
                localStorage.getItem(COOKIE_PREFIX + "currentUser")
            )
            .subscribe((res) => {
                if (res.norecord == false) {
                    this.savedListings = res.data;
                }
            });
    }

    this.listingsService.getRelatedListingsIDs(id).subscribe((res) => {
        if (res.length > 0) {
            this.listingsService
                .getListings("/?include=" + res.toString() + "&orderby=include")
                .subscribe((res) => {
                    this.relatedListings = res;
                });
        } else {
            this.relatedListings = [];
        }
    });
});
