import styled from 'styled-components';

export const TodoWrapper = styled.div`
  .todo {
    /* position: absolute; */
    /* left: 50%; */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
    margin-right: auto;
    margin-left: auto;
    width: 280px;
    /* height: 550px; */
    background-color: rgba(139, 152, 178, 0.15);
    border: 1px solid #61dafb;
    border-radius: 20px;
    color: #fff;
    box-shadow: 0px 9px 24px rgba(255, 255, 255, 0.15),
      0px 3px 20px rgba(255, 255, 255, 0.25);
    overflow: hidden;
    @media screen and (min-width: 768px) {
      width: 550px;
    }
    &__header {
      /* background-color: rgba(139, 152, 178, 0.5); */
      padding: 20px 30px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom: 1px solid #61dafb;

      h4 {
        color: #fff;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
      }
    }

    &__add-field {
      display: flex;
      border-bottom: 1px solid #61dafb;

      input {
        background-color: rgba(139, 152, 178, 0.25);
        border: 1px solid #61dafb;
        /* border: 0; */
        font-size: 18px;
        padding: 10px;
        color: #ffffff;
        flex: 1;
        @media screen and (min-width: 768px) {
          padding: 20px;
        }
        &::-webkit-input-placeholder {
          color: #bfbfbf;
        }
        &:-ms-input-placeholder {
          color: #bfbfbf;
        }
        &::-ms-input-placeholder {
          color: #bfbfbf;
        }
        &::placeholder {
          color: #bfbfbf;
        }

        &:focus {
          outline: none;
          border: 1px solid #ffffff;
          background-color: rgba(139, 152, 178, 0.5);
          transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      }

      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        width: 40px;
        height: 65px;
        cursor: pointer;
        @media screen and (min-width: 768px) {
          width: 65px;
        }
        svg {
          position: relative;
          right: -1px;
        }

        &:hover {
          /* background-color: #fbfbfb; */
          svg {
            path {
              fill: #61dafb;
            }
          }
        }
      }
    }

    &__list {
      &-item {
        $self: &;
        display: flex;
        padding: 20px;
        border-bottom: 1px solid #61dafb;

        &--completed {
          text-decoration: line-through;
          #{$self}-check {
            svg {
              display: block;
            }
          }

          #{$self}-check,
          #{$self}-check:hover {
            background-color: #61dafb;
          }
        }

        &-check {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #61dafb;
          border-radius: 30px;
          height: 24px;
          width: 24px;
          margin-right: 15px;
          cursor: pointer;

          svg {
            display: none;
          }

          &:hover {
            background-color: rgba(97, 218, 251, 0.5);
          }
        }

        &-remove:hover {
          cursor: pointer;

          svg {
            path {
              fill: #61dafb;
            }
          }
        }

        p {
          font-size: 18px;
          flex: 1;
        }
      }
    }
  }
`;
