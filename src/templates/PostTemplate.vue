<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <g-link :to="$page.prev.path">{{ $page.prev.title }}</g-link>
    <g-link :to="$page.next.path">{{ $page.next.title }}</g-link>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
// query Post ($id: ID!) {
//   post: post (id: $id) {
//     title
//     path
//     date (format: "D. MMMM YYYY")
//     timeToRead
//     tags {
//       id
//       title
//       path
//     }
//     description
//     content
//     cover_image (width: 860, blur: 10)
//   }
// }
</script>

<page-query>
query Post ($id: ID, $prevId: ID, $nextId: ID) {
  post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
  prev: post (id: $prevId) {
    title
    path
  }
  next: post (id: $nextId) {
    title
    path
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
    }

    img {
      display: block;
      max-width: 100%;
    }
  }
}

.post-comments {
  &:empty {
    display: none;
  }
}
</style>
